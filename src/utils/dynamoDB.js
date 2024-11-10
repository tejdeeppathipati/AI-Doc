// src/utils/dynamoDB.js
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';

const dynamoDB = new DynamoDBClient({ region: 'YOUR_REGION' });

export const storeUserDetails = async (userId, userDetails) => {
  const params = {
    TableName: 'Users',
    Item: {
      userId: { S: userId },
      email: { S: userDetails.email },
      dateOfBirth: { S: userDetails.dateOfBirth },
      gender: { S: userDetails.gender },
    },
  };
  await dynamoDB.send(new PutItemCommand(params));
};
