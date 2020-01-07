$host.UI.RawUI.BackgroundColor = "Gray"
$host.UI.RawUI.ForegroundColor = "Green"
Write-Output 'BUILD CONTAINER gateway1'
docker build --rm -f "Dockerfile" -t mdimai666/gateway1:latest "."
[Console]::ResetColor()
Write-Output ' '