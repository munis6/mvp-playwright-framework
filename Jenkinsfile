pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Tests with Allure') {
      steps {
        sh 'npm run test:cucumber'
      }
    }
  }

  post {
    always {
      // Publish Allure results using Jenkins Allure plugin
      allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
    }
  }
}
