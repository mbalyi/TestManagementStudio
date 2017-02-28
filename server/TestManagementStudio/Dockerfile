FROM microsoft/dotnet:latest

ENV DOTNET_CLI_TELEMETRY_OPTOUT 1

RUN mkdir -p /app/TestManagementStudio
COPY . /app/TestManagementStudio
WORKDIR /app/TestManagementStudio

EXPOSE 5000/tcp

RUN ["dotnet", "restore"]
ENTRYPOINT ["dotnet", "run", "-p", "project.json", "web"]
