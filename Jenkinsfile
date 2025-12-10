pipeline {
    agent any   // Run on any available Jenkins agent/node

    stages {

        stage('Checkout') {
            steps {
                echo "Checking out code..."
                git branch: 'main',
                    url: 'https://github.com/ruchitha6000/test-react.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm packages..."
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "Building React production bundle..."
                bat 'npm run build'
            }
        }

        stage('Publish Artifact') {
            steps {
                echo "Archiving build folder..."
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo "React app pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Please check the logs."
        }
    }
}
