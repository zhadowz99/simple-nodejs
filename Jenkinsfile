node('jenkins-agent') {
  
  try{

       stage('Cleaning Workspace') {
       echo 'Initializing for clean build...'
       deleteDir()
       }
    
    stage('Initialize') {
        echo 'Initializing...'
        def node = tool name: 'NodeJS-7.4', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        env.PATH = "${node}/bin:${env.PATH}"
    }

    stage('Checkout SCM') {
        echo 'Checkout SCM...'
        checkout scm
    }
    
    stage('check env') {
        echo 'Checking Environment...'
        sh 'node -v'
        sh 'npm -v'
    }


    try{
        stage('Building') {
            echo 'Building...'
            sh 'npm install'
            sh 'npm run test-jenkins'
        }

    }finally{
        
        stage('SonarQube analysis') {
        
        def scannerHome = tool 'SonarQube Scanner';
        withSonarQubeEnv('SonarQube') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
    }
    
  }

  }catch(e){

    throw e;
  }
}
