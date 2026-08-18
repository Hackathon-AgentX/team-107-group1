@echo off
echo Starting WellnessConnect...
echo.
echo Open your browser at: http://localhost:3000
echo Press Ctrl+C to stop.
echo.
cd /d "%~dp0"
python -m http.server 3000
pause
