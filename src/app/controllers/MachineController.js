const User = require('../models/User')

/* Reels */
const REELS = [
  ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'],
  ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'],
  ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']
]
/* Rewards */
const rewards = {
  cherry: [0, 0, 40, 50],
  lemon: [0, 0, 0, 3],
  apple: [0, 0, 10, 20],
  banana: [0, 0, 5, 15]
}

class MachineController {
  async index (req, res) {
    const user = await User.findById(req.userId)

    user.set({ coins: user.coins - 1 })

    await user.save()

    // starting frequency Map

    const fruit_frequency = new Map()
    // Starting fruits with zero
    fruit_frequency.set('cherry', 0)
    fruit_frequency.set('lemon', 0)
    fruit_frequency.set('apple', 0)
    fruit_frequency.set('banana', 0)

    const max_pos = 7
    const min_pos = 0

    const spin_result = []

    for (let index = 0; index < 3; index++) {
      // Choose a random number between 0 and 7 (reel length)
      const randomNumber = Math.floor(Math.random() * (+max_pos - +min_pos) + +min_pos)
      // Push random value in result
      await spin_result.push(REELS[index][randomNumber])
    }
    // Put frequencies on the Map
    spin_result.forEach(value => fruit_frequency.set(value, fruit_frequency.get(value) + 1))

    // Updating coins value
    let coins_won = 0

    coins_won += rewards.cherry[fruit_frequency.get('cherry')]
    coins_won += rewards.lemon[fruit_frequency.get('lemon')]
    coins_won += rewards.apple[fruit_frequency.get('apple')]
    coins_won += rewards.banana[fruit_frequency.get('banana')]

    user.set({ coins: user.coins + coins_won })

    await user.save()

    const { coins: new_coins } = user

    return res.json({ new_coins, spin: spin_result })
  }
}

module.exports = new MachineController()
