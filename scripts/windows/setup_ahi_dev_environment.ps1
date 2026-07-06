# ==========================================
# AHI Development Environment Setup
# Version : 1.0
# Platform: Windows
# ==========================================

Write-Host ""
Write-Host "========================================="
Write-Host "AHI Development Environment Checker"
Write-Host "========================================="
Write-Host ""

Write-Host "Checking Git..."
git --version

Write-Host ""
Write-Host "Checking Python..."
python --version

Write-Host ""
Write-Host "Checking Node..."
node --version

Write-Host ""
Write-Host "Checking npm..."
npm --version

Write-Host ""
Write-Host "Checking VS Code..."
code --version

Write-Host ""
Write-Host "========================================="
Write-Host "Environment Check Completed"
Write-Host "========================================="