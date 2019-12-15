import {
  attribute,
  hashKey,
  table,
} from '@aws/dynamodb-data-mapper-annotations'

@table(`${process.env.TABLE_NAME}`)
export default class Item {
  @hashKey()
  id: string

  @attribute()
  name: string

  @attribute()
  description: string
}
