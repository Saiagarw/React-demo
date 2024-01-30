import dotenv from "dotenv";

import scanner from "sonarqube-scanner";

dotenv.config();

scanner(
    {
        serverUrl: "http://localhost:9000",
        token: `${process.env.SONAR_TOKEN}`,
        options: {
            "sonar.projectName": "Demo",
            "sonar.projectDescription": "Fontend part of PS BANK",
            "sonar.projectKey": "Demo",
            "sonar.projectVersion": "0.0.1",
            "sonar.sourceEncoding": "UTF-8",
            "sonar.language": "javascript",
            "sonar.sources": "./src",
            "sonar.exclusions": "**/*.test.jsx,**/*.test.js",
            "sonar.tests": "./src",
            "sonar.test.inclusions": "**/*.test.jsx,**/*.test.js",
            "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.testExecutionReportPaths": "test-report.xml",
            "sonar.eslint.reportPaths":"eslint-report.json",
        },
    },
    () => process.exit(),
);
