# Minimizing AWS Lambda deployment package size in TypeScript

Proof-of-concept repository for the blog post "Minimizing AWS Lambda deployment package size in TypeScript".
All concepts can be applied to the AWS Lambda functions written in JavaScript.

Branch **master** - initial project:
- handler lambda: 5.3 MB
- authorizer lambda: 5.3 MB

Branch **step-1** - introducing webpack, bundle only our own code:
- handler lambda: 5.3 MB
- authorizer lambda: 5.3 MB

Branch **step-2** - bundle node_modules:
- graphql lambda: 445 KB
- authorizer lambda: 445 KB

Branch **step-3** - 'package: individually':
- graphql lambda: 445 KB
- authorizer lambda: 744 B
