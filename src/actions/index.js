import { ADD_REMINDER } from '../types'

export const addReminder = text => {
  const action = {
    type: ADD_REMINDER,
    text
  }
  console.log('action in addReminider', action)
  return action
}
