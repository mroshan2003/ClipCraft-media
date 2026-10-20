Add-Type -AssemblyName System.Drawing

$sourcePath = (Resolve-Path "public/images/clipcraft-brand-banner.jpg").Path
$img = [System.Drawing.Bitmap]::FromFile($sourcePath)

Write-Host "Image Size: $($img.Width) x $($img.Height)"

# The image is approximately 800x1000 or 1080x1350.
# The logo is centered vertically around 35% - 60% of the image.
# Let's crop the logo bounding box and create both:
# 1) A cropped high-res logo with the burgundy background
# 2) A transparent version where deep burgundy is converted to transparent or clean alpha

# First let's find the logo bounding box:
# White pixels (R > 200, G > 200, B > 200) define the logo.
$minX = $img.Width
$maxX = 0
$minY = $img.Height
$maxY = 0

for ($y = 0; $y -lt $img.Height; $y += 2) {
    for ($x = 0; $x -lt $img.Width; $x += 2) {
        $pixel = $img.GetPixel($x, $y)
        # Check if pixel is white / logo graphic
        if ($pixel.R -gt 190 -and $pixel.G -gt 190 -and $pixel.B -gt 190) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Logo Bounding Box: X=[$minX, $maxX], Y=[$minY, $maxY]"
$padding = 24
$cropX = [Math]::Max(0, $minX - $padding)
$cropY = [Math]::Max(0, $minY - $padding)
$cropW = [Math]::Min($img.Width - $cropX, ($maxX - $minX) + ($padding * 2))
$cropH = [Math]::Min($img.Height - $cropY, ($maxY - $minY) + ($padding * 2))

Write-Host "Cropping rect: X=$cropX, Y=$cropY, W=$cropW, H=$cropH"

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = $img.Clone($rect, $img.PixelFormat)
$cropped.Save("public/images/clipcraft-logo-card.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Create a transparent version where non-white background is made transparent
$transparentBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $p = $cropped.GetPixel($x, $y)
        # Calculate brightness / whiteness
        $brightness = ($p.R + $p.G + $p.B) / 3.0
        if ($brightness -gt 180) {
            # Logo white pixel - keep solid white with antialiasing
            $alpha = [Math]::Min(255, [int](($brightness - 160) * (255.0 / 70.0)))
            if ($alpha -gt 255) { $alpha = 255 }
            if ($alpha -lt 0) { $alpha = 0 }
            $newColor = [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255)
            $transparentBmp.SetPixel($x, $y, $newColor)
        } else {
            # Background burgundy - transparent
            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$transparentBmp.Save("public/images/clipcraft-logo-white.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Also create a dark burgundy version for light backgrounds:
$burgundyBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $p = $transparentBmp.GetPixel($x, $y)
        if ($p.A -gt 10) {
            $burgundyBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($p.A, 98, 0, 0))
        } else {
            $burgundyBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}
$burgundyBmp.Save("public/images/clipcraft-logo-burgundy.png", [System.Drawing.Imaging.ImageFormat]::Png)

$img.Dispose()
$cropped.Dispose()
$transparentBmp.Dispose()
$burgundyBmp.Dispose()

Write-Host "Success! Created clipcraft-logo-card.png, clipcraft-logo-white.png, clipcraft-logo-burgundy.png"
