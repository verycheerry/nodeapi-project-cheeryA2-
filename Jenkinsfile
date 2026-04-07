pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/your-username/nodeapi-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('NodeAPI') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Application') {
            steps {
                dir('NodeAPI') {
                    sh 'nohup node index.js &'
                }
            }
        }

    }
}
