const mongoose = require("mongoose");
const CatFacts = require("../models/CatFacts");
require('dotenv').config();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/catphotoapp';

const seedCatFacts = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    await CatFacts.create([
      { fact: "Cats can rotate their ears 180 degrees." },
      { fact: "A cat's whiskers are roughly as wide as its body." },
      { fact: "The average cat sleeps 12-16 hours per day." },
      { fact: "Cats have a strong sense of smell, 14 times better than humans." },
      { fact: "Most cats are lactose intolerant." },
      { fact: "A group of cats is called a clowder." },
      { fact: "Cats can jump up to six times their body length in one leap." },
      { fact: "The oldest known pet cat was found in a 9,500-year-old grave in Cyprus." },
      { fact: "A cat’s purr vibrates at a frequency that promotes healing." },
      { fact: "Domestic cats share about 95.6% of their DNA with tigers." },
      { fact: "A cat’s back is extremely flexible and has 53 vertebrae, compared to a human’s 33." },
      { fact: "Cats can make over 100 different sounds." },
      { fact: "Unlike dogs, cats walk by moving both right legs first, then both left legs." },
      { fact: "A cat's nose is as unique as a human fingerprint." },
      { fact: "Some cats can run up to 30 mph in short bursts." },
      { fact: "Cats sweat through their paws." },
      { fact: "A cat's hearing is better than a dog's and nearly three times better than a human's." },
      { fact: "Ancient Egyptians worshipped cats and even mummified them." },
      { fact: "The Guinness World Record for the longest cat measured 48.5 inches from nose to tail." },
      { fact: "Cats dream just like humans do." },
      { fact: "A cat’s brain is 90% similar to a human’s." },
      { fact: "The wealthiest cat in history inherited $13 million." },
      { fact: "In Japan, black cats are considered good luck." },
      { fact: "Cats can rotate their eyes slightly to see in near-total darkness." },
      { fact: "A cat's tail helps it balance when jumping and climbing." },
      { fact: "Most cats are ambidextrous, but some show a preference for one paw." },
      { fact: "A cat's whiskers are deeply connected to its nervous system and help it sense the environment." },
      { fact: "Cats can drink seawater because their kidneys can filter out the salt." },
      { fact: "The world's oldest cat lived to be 38 years old." },
      { fact: "Cats have a special reflective layer behind their eyes that helps them see in the dark." },
      { fact: "Each cat has a unique meow that they use to communicate with their owners." },
      { fact: "When a cat kneads with its paws, it's a sign of contentment and comfort." },
      { fact: "Cats can recognize their owner's voice but may choose to ignore it." },
      { fact: "The world's heaviest cat on record weighed over 40 pounds." },
      { fact: "Cats have three eyelids: an upper, a lower, and a third one called a haw." },
      { fact: "Many cats are born with extra toes, a condition called polydactylism." },
      { fact: "Cats groom each other as a sign of affection and social bonding." },
      { fact: "Newborn kittens are born with their eyes closed and only open them after about a week." },
      { fact: "Cats can learn to understand human words and gestures." },
      { fact: "The world's first cat video was recorded in 1894 by Thomas Edison." },
      { fact: "A cat’s tongue is covered in tiny, hook-like structures that help it groom and eat." },
      { fact: "The oldest cat breed is the Egyptian Mau, which dates back thousands of years." },
      { fact: "Cats can be trained to use a toilet instead of a litter box." },
      { fact: "Some cats have been known to find their way home from hundreds of miles away." },
      { fact: "A cat’s whiskers are not just on its face – they also grow on the backs of its legs." },
      { fact: "Cats can develop different dialects of meows depending on their environment." },
      { fact: "A cat’s spine is so flexible it allows them to squeeze into tiny spaces." },
      { fact: "Feline leukemia is one of the most common infectious diseases in cats." },
      { fact: "Cats don’t have a sweet tooth – they cannot taste sweetness." },
      { fact: "The Norwegian Forest Cat was a favorite pet of Vikings." },
      { fact: "A cat's meow is a learned behavior to communicate with humans." },
      { fact: "The smallest cat breed in the world is the Singapura." },
      { fact: "A cat's whiskers help it judge space and determine if it can fit through a gap." },
      { fact: "Cats use their tails to express emotions like happiness and annoyance." },
      { fact: "Each cat’s nose has a unique pattern, much like a human fingerprint." },
      { fact: "Ancient sailors often kept cats on ships to control the rodent population." },
      { fact: "Cats can jump five to six times their height in one bound." },
      { fact: "Cats roll over to show trust, but they may not want belly rubs." },
      { fact: "The famous cartoon cat Garfield debuted in 1978." },
      { fact: "The first cloned pet was a cat named 'CC' (Carbon Copy)." },
      { fact: "Purring can have a calming effect on humans and reduce stress." },
      { fact: "A cat’s back legs are stronger than its front legs, helping them jump higher." },
      { fact: "Maine Coons are one of the largest domesticated cat breeds." },
      { fact: "Not all orange cats are male, but most of them are due to genetics." },
      { fact: "A cat’s heartbeat is much faster than a human’s, averaging 140-220 beats per minute." },
      { fact: "Some cats suffer from allergies, just like humans." },
      { fact: "If a cat’s tail is twitching, it may be annoyed or excited." },
      { fact: "A cat’s purr has been linked to healing properties, including bone regeneration." },
      { fact: "Cats walk on their toes, a characteristic called digitigrade walking." },
      { fact: "Most cats prefer running water to still water, which is why they often drink from taps." },
      { fact: "The world's richest cat, Blackie, inherited $12.5 million." },
      { fact: "The largest recorded litter of kittens was 19!" },
      { fact: "A cat’s whiskers can detect slight changes in air currents, helping them hunt in the dark." },
      { fact: "The Turkish Van breed loves swimming, unlike most cats." },
      { fact: "Cats prefer warm spots because their ancestors lived in deserts." },
      { fact: "A cat's nose contains millions of scent receptors." },
      { fact: "If a cat rubs its head on you, it’s marking you as part of its territory." },
      { fact: "The Chartreux breed is known for its 'smiling' expression due to its facial structure." },
      { fact: "Cats have five toes on their front paws but only four on their back paws." },
    ]);
    console.log('Cat facts added to the database!');

  } catch (err) {
    console.error('Error adding cat facts:', err);
  } finally { 
    mongoose.connection.close(); // close db connection in a controlled manner after the seeding is complete or if an error occurs.
  }
}

module.exports = seedCatFacts;