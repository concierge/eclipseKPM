let abuse = [
  "Index out of bounds exception: cannot decrement the counter.",
  "Could not throw Intellij not found exception, how about we use eclipse instead?",
  "Eclipse shat the bed, so watch where you step.",
  "I got an error opening an error dialog"
];

exports.match = (message, commandprefix) => {
   return message.startsWith(commandprefix + "eclipse");
};

exports.help = (commandPrefix) => {
  return [[commandPrefix + "eclipse", "Shows how much I hate eclipse", "this could only end one way, eclipse"]]
};

exports.run = (api, event) => {
  if (!exports.config.count) {
    exports.config.count = 0;
  }
  exports.config.count--;

  api.sendMessage("Death count at: " + exports.config.count + "\n" + abuse[Math.floor(Math.random()*abuse.length)], event.thread_id);
};
