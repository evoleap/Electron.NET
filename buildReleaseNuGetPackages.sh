echo "Start building Electron.NET dev stack..."
ENETVER=19.0.11

echo "Restore & Build API"
cd ElectronNET.API && \
dotnet restore && \
dotnet build --configuration Release --force /property:Version=$ENETVER && \
dotnet pack /p:Version=$ENETVER --configuration Release --force --output "%~dp0artifacts";

cd ../;

echo "Restore & Build CLI"
cd ElectronNET.CLI && \
dotnet restore && \
dotnet build --configuration Release --force /property:Version=$ENETVER && \
dotnet pack /p:Version=$ENETVER --configuration Release --force --output "%~dp0artifacts";
