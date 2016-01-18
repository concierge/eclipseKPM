let abuse = [
  "Index out of bounds exception: cannot decrement the counter.",
  "Could not throw Intellij not found exception, how about we use eclipse instead?",
  "Eclipse shat the bed, so watch where you step.",
  "I got an error opening an error dialog"
]

exports.match => (message, commandprefix) {
   return message.startsWith(commandprefix + "eclipse");
}

exports.help => () {
  return [[this.commandprefix + "eclipse", "Shows how much I hate eclipse", "fuck eclipse"]]
}

exports.run => (api, event) {
  if (!this.config.count) {
    this.config.count = 0;
  }
  this.config.count--;

  api.sendMessage("Death count at: " + this.config.count + "\n" + abuse[Math.floor(Math.random()*abuse.length)], event.thread_id);
}
