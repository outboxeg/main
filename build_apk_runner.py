import subprocess, os, shutil

env = os.environ.copy()
env['JAVA_HOME'] = r'C:\Program Files\Microsoft\jdk-17.0.20.101-hotspot'
env['PATH'] = r'C:\Gradle\gradle-8.4\bin;' + os.path.join(env['JAVA_HOME'], 'bin') + ';' + env['PATH']
env['ANDROID_HOME'] = r'C:\Android\Sdk'

cmd = [r'C:\Gradle\gradle-8.4\bin\gradle.bat', 'assembleDebug', '--stacktrace']
cwd = os.path.abspath(os.path.join('تطبيق_الهاتف', 'android'))

print("Starting Gradle assembleDebug...")
proc = subprocess.run(cmd, cwd=cwd, env=env, capture_output=True, text=True, shell=True)

with open('gradle_build.log', 'w', encoding='utf-8') as f:
    f.write("=== STDOUT ===\n" + proc.stdout + "\n\n=== STDERR ===\n" + proc.stderr)

print("Gradle finished with return code:", proc.returncode)

# Check for output apk
apk_dir = os.path.join(cwd, 'app', 'build', 'outputs', 'apk', 'debug')
if os.path.exists(apk_dir):
    for item in os.listdir(apk_dir):
        if item.endswith('.apk'):
            src_apk = os.path.join(apk_dir, item)
            dst_apk = os.path.abspath(os.path.join('تطبيق_الهاتف', 'برة_الصندوق.apk'))
            shutil.copy2(src_apk, dst_apk)
            print("SUCCESS! APK copied to:", dst_apk, "Size:", os.path.getsize(dst_apk), "bytes")
