import { AuthResponse, CustomAuthorizerEvent, Context, Callback } from 'aws-lambda'

export default (event: CustomAuthorizerEvent, context: Context, callback: Callback) => {
  const policy = generatePolicy('dummy', 'Allow', event.methodArn)
  callback(null, policy)
}

const generatePolicy = function (principalId: string, effect: string, resource: string): AuthResponse {
  return {
    principalId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [{
        Action: 'execute-api:Invoke',
        Effect: effect,
        Resource: resource,
      }],
    }
  }
}
