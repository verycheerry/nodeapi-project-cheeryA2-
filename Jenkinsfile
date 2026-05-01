pipeline {
    agent any

    stages {
        stage('Clone from GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/verycheerry/FINAL-Nodeapi-cheery-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Check Node Version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }
}
