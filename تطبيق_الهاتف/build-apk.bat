@echo off
chcp 65001 > nul
echo ==================================================================
echo   تطبيق برة الصندوق – المدرسة الخضراء الذكية (بناء وتحديث التطبيق)
echo ==================================================================
echo.

echo [1/3] مزامنة ملفات الـ WebApp المحدثة مع حزمة الأندرويد...
python -c "import os, shutil; src='www'; dst=os.path.join('android','app','src','main','assets','www'); shutil.rmtree(dst, ignore_errors=True); shutil.copytree(src, dst); print('  -> تم نسخ الأصول بنجاح إلى android/app/src/main/assets/www')"

echo.
echo [2/3] فحص بيئة البناء على الجهاز...
where gradlew >nul 2>nul
if %errorlevel% equ 0 (
    echo   -> تم العثور على Gradle. جاري بناء ملف الـ APK...
    cd android
    call gradlew assembleRelease
    cd ..
    echo   -> تم بناء الـ APK بنجاح في: android\app\build\outputs\apk\release\
) else (
    echo   -> لم يتم العثور على Gradle في مسار النظام المباشر.
    echo   -> يمكنك فتح مجلد 'android' مباشرة في برنامج Android Studio والنقر على:
    echo      Build > Build Bundle(s) / APK(s) > Build APK(s)
)

echo.
echo [3/3] اكتملت العملية بنجاح!
pause
