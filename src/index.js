const { Client, GatewayIntentBits } = require('discord.js')
const token = process.env.BOT_TOKEN

const commandsHandler = require('./commands/commandsHandler')
const eventHandler = require('./events/eventsHandler')

async function startServer () {
  // Create a new client instance
  const client = new Client({ intents: [GatewayIntentBits.Guilds] })

  // Init the commandsHandler
  commandsHandler(client)

  // Init the eventHandler
  eventHandler(client)

  // Log in to Discord with the bot token
  client.login(token)
}

startServer()
