@echo off
chcp 65001 > nul
echo ======================================================================
echo   إنشاء مفتاح التوقيع الرقمي الرسمي (Production Release Keystore)
echo   لمشروع برة الصندوق - المدرسة الخضراء الذكية
echo ======================================================================
echo.

set KEYSTORE_NAME=outbox-release-key.jks
set KEY_ALIAS=outbox_key

if exist %KEYSTORE_NAME% (
    echo [!] تم العثور على ملف المفتاح الرقمي مسبقاً: %KEYSTORE_NAME%
    goto end
)

echo [*] جاري إنشاء مفتاح التوقيع الرقمي الرسمي المعتمد RSA-2048...
keytool -genkeypair -v -keystore %KEYSTORE_NAME% -alias %KEY_ALIAS% -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Bara El-Sandouq, OU=Smart Green School, O=El-Israa NGO, L=Damanhour, ST=Beheira, C=EG" -storepass outbox2026pass -keypass outbox2026pass

if %ERRORLEVEL% equ 0 (
    echo.
    echo [✓] تم إنشاء ملف التوقيع الرقمي بنجاح: %KEYSTORE_NAME%
    echo     Alias: %KEY_ALIAS%
    echo     Password: outbox2026pass
    echo     الصلاحية: 10,000 يوم (معتمد رسمياً)
) else (
    echo.
    echo [X] تعذر إنشاء المفتاح، يرجى التأكد من تثبيت JDK/keytool.
)

:end
echo.
pause
