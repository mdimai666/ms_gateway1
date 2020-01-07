$host.UI.RawUI.BackgroundColor = "Gray"
$host.UI.RawUI.ForegroundColor = "Green"
Write-Output 'BUILD CONTAINER node1'
docker build --rm -f "Dockerfile" -t mdimai666/doc1:latest "."
[Console]::ResetColor()
Write-Output ' '