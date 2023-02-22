export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME, //"udagramanisdev",
    "password": process.env.POSTGRESS_PASSWORD, // "udagramanisdev",
    "database": process.env.POSTGRESS_DATABASE, //"udagramanisdev",
    "host": process.env.POSTGRESS_HOST, //"udagramanisdev.cpxkwux5kjlj.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.POSTGRESS_AWS_REGION, //"us-east-1",
    "aws_profile": process.env.POSTGRESS_AWS_PROFILE,  //"default",
    "aws_media_bucket": process.env.POSTGRESS_MEDIA_BUCKET  //"udagram-407183722470-dev"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
