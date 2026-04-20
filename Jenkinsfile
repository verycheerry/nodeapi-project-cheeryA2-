pipeline {
    agent any

    stages {

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
