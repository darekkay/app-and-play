const deck = [
  {
    name: "Bear",
    firstPlayer: "blue",
    text:
      "Defend your ground. Do not be like those fools who are quick to run to attack from another position. They have lost the fight because they have already run from it.",
    moves: [{ x: -1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: -1 }],
    alignment: "left"
  },
  {
    name: "Boar",
    firstPlayer: "red",
    text:
      "Watch for opportunity, for it will present itself. Then strike, focusing all your might into a single rush, trampling your opponent's Art under your own.",
    moves: [{ x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }],
    alignment: "center"
  },
  {
    name: "Cobra",
    firstPlayer: "red",
    text:
      "Attack violently when your opponents are not expecting it - show leisure in the beginning, then suddenly attack vigorously.",
    moves: [{ x: -1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: -1 }],
    alignment: "right"
  },
  {
    name: "Crab",
    firstPlayer: "blue",
    text:
      "Move with your opponent's movements, as if you are the mever-ceasing tide. When the time is right, he will fall prey to your attack.",
    moves: [{ x: -2, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 0 }],
    alignment: "center"
  },
  {
    name: "Crane",
    firstPlayer: "blue",
    text:
      "Make no unnecessary movement, conserving your strength until the time is right to strike. The true Art is a symphony of graceful strikes.",
    moves: [{ x: -1, y: -1 }, { x: 0, y: 1 }, { x: 1, y: -1 }],
    alignment: "center"
  },
  {
    name: "Dog",
    firstPlayer: "blue",
    text:
      "Deny your opponent his Art. Once you have blocked his attack, do not let him go, but instead relentlessly hamper his momentum.",
    moves: [{ x: -1, y: 1 }, { x: -1, y: 0 }, { x: -1, y: -1 }],
    alignment: "left"
  },
  {
    name: "Dragon",
    firstPlayer: "red",
    text:
      "Be swift as the thunder that peals before you have a chance to cover your ears, fast as the lightning that flashes before you can blink your eyes.",
    moves: [{ x: -2, y: 1 }, { x: 2, y: 1 }, { x: -1, y: -1 }, { x: 1, y: -1 }],
    alignment: "center"
  },
  {
    name: "Eel",
    firstPlayer: "blue",
    text:
      "If your opponent strikes with fire, counter with water, becoming completely fluid and freeflowing.",
    moves: [{ x: -1, y: 1 }, { x: -1, y: -1 }, { x: 1, y: 0 }],
    alignment: "left"
  },
  {
    name: "Elephant",
    firstPlayer: "red",
    text:
      "Only the strong may pursue your Art. This is why it is the true Art, the Art that cannot be stopped.",
    moves: [{ x: -1, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 0 }],
    alignment: "center"
  },
  {
    name: "Fox",
    firstPlayer: "red",
    text:
      "Hurry your opponent through your Art, give him no time to think, less time to act.",
    moves: [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }],
    alignment: "right"
  },
  {
    name: "Frog",
    firstPlayer: "red",
    text:
      "Do not fail to learn from the pure voice of an ever flowing mountain stream spashing over the rocks. Emulate it's flow, mimic it's power.",
    moves: [{ x: -2, y: 0 }, { x: -1, y: 1 }, { x: 1, y: -1 }],
    alignment: "left"
  },
  {
    name: "Giraffe",
    firstPlayer: "blue",
    text:
      "Project your power, vaulting at oppenents who believe themselves safely out of range. Agrression is subservient to surprise.",
    moves: [{ x: -2, y: 1 }, { x: 0, y: -1 }, { x: 2, y: 1 }],
    alignment: "center"
  },
  {
    name: "Goat",
    firstPlayer: "red",
    text:
      "Strategy flows from the mind. Deny your opponents clear thoughts through strikes at their head and eyes, and their strategy will fail, providing the change to strike.",
    moves: [{ x: 1, y: 1 }, { x: -1, y: 0 }, { x: 0, y: -1 }],
    alignment: "right"
  },
  {
    name: "Goose",
    firstPlayer: "blue",
    text:
      "Your robes are your cloak of feathers; spread your wings to hide your intentions. Even then, as your opponent seeks to determine your motive, you shall strike.",
    moves: [{ x: -1, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 1, y: -1 }],
    alignment: "left"
  },
  {
    name: "Horse",
    firstPlayer: "red",
    text:
      "Lose yourself in the rhythm of your Art. At times be swift and decisive, at other times measured and taunting.",
    moves: [{ x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }],
    alignment: "left"
  },
  {
    name: "Iguana",
    firstPlayer: "red",
    text:
      "While your opponent wears himself out with unnecessary movement, you will gather your strength. A devastating sweep or fatal punch is the pinnacle of the Art.",
    moves: [{ x: -2, y: 1 }, { x: 0, y: 1 }, { x: 1, y: -1 }],
    alignment: "left"
  },
  {
    name: "Kirin",
    firstPlayer: "red",
    text:
      "There is Art in grace, Art in discernment, Art in sensing the truth. Pierce the veil of the shadow, and strike your opponent from a place of enlightenment.",
    moves: [{ x: -1, y: 2 }, { x: 0, y: -2 }, { x: 1, y: 2 }],
    alignment: "center"
  },
  {
    name: "Mantis",
    firstPlayer: "red",
    text:
      "Your opponent sees, but does not understand. Distract the watchful, misguide the wary. This is the Art of the Mantis, the Art of the deceptive strike.",
    moves: [{ x: -1, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 1 }],
    alignment: "center"
  },
  {
    name: "Monkey",
    firstPlayer: "blue",
    text:
      "Without deception you cannot carry out strategy, without strategy you cannot control the opponent.",
    moves: [{ x: -1, y: 1 }, { x: -1, y: -1 }, { x: 1, y: 1 }, { x: 1, y: -1 }],
    alignment: "center"
  },
  {
    name: "Mouse",
    firstPlayer: "blue",
    text:
      "All opponents have a hole in their Art, an opening of weakness. The Art of the Mouse is to find that opening, enter it, and strike.",
    moves: [{ x: -1, y: -1 }, { x: 0, y: 1 }, { x: 1, y: 0 }],
    alignment: "right"
  },
  {
    name: "Otter",
    firstPlayer: "red",
    text:
      "Who can stop the flowing stream? The Art of the Otter is the Art of Power, knocking away the advances of the opponent through sustained, powerful strikes.",
    moves: [{ x: -1, y: 1 }, { x: 1, y: -1 }, { x: 2, y: 0 }],
    alignment: "left"
  },
  {
    name: "Ox",
    firstPlayer: "blue",
    text:
      "Pour your strength into the forms of your Art. In it's punches, it's kicks, in the steady advance of your agression.",
    moves: [{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: -1 }],
    alignment: "right"
  },
  {
    name: "Panda",
    firstPlayer: "red",
    text:
      "Your opponent watches for your complacency, so show it to him. Lull him into an attack, then unleash your Art when he has already committed to his attack.",
    moves: [{ x: -1, y: -1 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
    alignment: "right"
  },
  {
    name: "Phoenix",
    firstPlayer: "blue",
    text:
      "No opponent expects that which he believes is not there. Harness the shadows, bend the sun, strike as the wind - from a place unseen.",
    moves: [{ x: -2, y: 0 }, { x: -1, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 0 }],
    alignment: "center"
  },
  {
    name: "Rabbit",
    firstPlayer: "blue",
    text:
      "Be near to your opponent, blinding him with your speed. The Art of the Rabbit is the Art of speed.",
    moves: [{ x: -1, y: -1 }, { x: 1, y: 1 }, { x: 2, y: 0 }],
    alignment: "right"
  },
  {
    name: "Rat",
    firstPlayer: "red",
    text:
      "Your opponent cannot attack when he cannot predict. Let your movements be immediate, your attacks be unexpected.",
    moves: [{ x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: -1 }],
    alignment: "left"
  },
  {
    name: "Rooster",
    firstPlayer: "red",
    text:
      "Do not allow your enemy to rest, but focus your Art to deliver quick, sharp strikes whenever he lags.",
    moves: [{ x: -1, y: 0 }, { x: -1, y: -1 }, { x: 1, y: 1 }, { x: 1, y: 0 }],
    alignment: "right"
  },
  {
    name: "Sable",
    firstPlayer: "blue",
    text:
      "Be fluid, and control the battlefield with constant movement and precision strikes.",
    moves: [{ x: -2, y: 0 }, { x: -1, y: -1 }, { x: 1, y: 1 }],
    alignment: "right"
  },
  {
    name: "Sea Snake",
    firstPlayer: "blue",
    text:
      "There is no movement or opportunity wasted. Strike where you are not expected, flow where your opponent believes you cannot be.",
    moves: [{ x: -1, y: -1 }, { x: 0, y: 1 }, { x: 2, y: 0 }],
    alignment: "right"
  },
  {
    name: "Sheep",
    firstPlayer: "blue",
    text:
      "Follow your opponent's movements, shadow his forms. The Art of the Sheep is the art of knowing, and of using your opponent's strenghts against his weaknesses.",
    moves: [{ x: -1, y: 1 }, { x: 1, y: 0 }, { x: 0, y: -1 }],
    alignment: "left"
  },
  {
    name: "Tanuki",
    firstPlayer: "blue",
    text:
      "The Art of the Tanuki is the Art of opportunity. Patience will open the door to the perfect angle of your strike.",
    moves: [{ x: -1, y: -1 }, { x: 0, y: 1 }, { x: 2, y: 1 }],
    alignment: "right"
  },
  {
    name: "Tiger",
    firstPlayer: "blue",
    text:
      "The power of your Art projects itself like a shadow. Sense your opponent's fear, and pounce with certainty and strength.",
    moves: [{ x: 0, y: 2 }, { x: 0, y: -1 }],
    alignment: "center"
  },
  {
    name: "Turtle",
    firstPlayer: "red",
    text:
      "Within your sphere of power, your Art remains supreme. Engage your opponent, and deflect his strikes.",
    moves: [{ x: -2, y: 0 }, { x: -1, y: -1 }, { x: 1, y: -1 }, { x: 2, y: 0 }],
    alignment: "center"
  },
  {
    name: "Viper",
    firstPlayer: "red",
    text:
      "The Art of the Viper is to strike in the Moment. This is the true Art.",
    moves: [{ x: -2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: -1 }],
    alignment: "left"
  }
];

export const toArrayIndex = move => {
  return 12 - 5 * move.y + move.x;
};

export default deck.map(card => ({
  ...card,
  moves: card.moves.map(toArrayIndex)
}));
