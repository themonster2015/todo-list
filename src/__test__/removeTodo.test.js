import { expect } from '@jest/globals'
import removeTodoMock from '../__mocks__/deleteTodoMock'
import getStorageMock from '../__mocks__/getStorageMock'

describe( 'removetodo', () => {
	const todo = [
		{
			description: 'Sleep',
			index: 1,
			completed: false
		}, 
		{
			description: 'Eat',
			index: 2,
			completed: false	
		},
		{
			description: 'Code',
			index: 3,
			completed: false	
		}
	]
	it ('should remove todo from list', () =>  {
	removeTodoMock(todo, 2)
		expect(getStorageMock.getItem('todos')).toHaveLength(2)
	})
	it ('should update index after removing an item', () =>  {
		expect(getStorageMock.getItem('todos')[0].index).toBe(1)
	})
	it ('should delete only one item from the array', () =>  {
		expect(removeTodoMock(todo, 1)).toHaveLength(1)
	})
}) 