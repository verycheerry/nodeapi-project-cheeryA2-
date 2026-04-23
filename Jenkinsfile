pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing stage'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t nodeapi .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:5000 nodeapi'
            }
        }
    }
}
