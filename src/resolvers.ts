import {
  DataMapper
} from '@aws/dynamodb-data-mapper'
import { DynamoDB } from 'aws-sdk'
import uuid from 'uuid'
import Item from './models/Item'

const mapper = new DataMapper({ client: new DynamoDB({}) })

export const resolvers = {
  Query: {
    item: async (root: any, args: { id: string }) => {
      const toGet = Object.assign(new Item(), args)
      return await mapper.get(toGet)
    },
    items: async () => {
      const items = []
      const iterator = mapper.scan(Item)
      for await (const record of iterator) {
        items.push(record)
      }
      return items
    }
  },
  Mutation: {
    createItem: async (root: any, args: { name: string, description: string }) => {
      const toPut = Object.assign(new Item(), args, { id: uuid.v4() })
      return await mapper.put(toPut)
    },
    updateItem: async (root: any, args: { id: string, name: string, description: string }) => {
      const toUpdate = Object.assign(new Item(), args)
      return await mapper.update(toUpdate)
    },
    deleteItem: async (root: any, args: { id: string }) => {
      const toDelete = Object.assign(new Item, args)
      await mapper.delete(toDelete)
      return args.id
    }
  }
}
