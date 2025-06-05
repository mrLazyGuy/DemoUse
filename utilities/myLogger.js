const winston = require("winston");
const { combine, timestamp, label, prettyPrint } = winston.format;

const logger = winston.createLogger({
    //
    level: "info",
    format: combine(
        timestamp(),
        label({ label: "right meow!" }),
        prettyPrint(),
    ),
    transports: [new winston.transports.Console()],
});

logger.silly({
    message: "What time is the testing at?",
});

module.exports = logger;
