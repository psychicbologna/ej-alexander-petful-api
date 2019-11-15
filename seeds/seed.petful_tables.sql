BEGIN;

TRUNCATE cats RESTART IDENTITY CASCADE;

TRUNCATE dogs RESTART IDENTITY CASCADE;

INSERT INTO
  cats (
    imageURL,
    imageDescription,
    name,
    gender,
    age,
    breed,
    story,
    dateEntered
  )
VALUES
  (
    'http://placekitten.com/200/300',
    'A beautiful kitten who needs a home',
    'Mittens',
    'male',
    5,
    'Bengal',
    'Abandoned by owner after he ate her plant.',
    '2019-11-15T00:00:00.615Z'
  ),
  (
    'http://placekitten.com/200/300',
    'A beautiful kitten who needs a home',
    'Tina',
    'female',
    5,
    'Maine Coone',
    'Found abandoned in a dumpster.',
    '2019-10-15T00:00:00.615Z'
  ),
  (
    'http://placekitten.com/200/300',
    'A beautiful kitten who needs a home',
    'Tauhida',
    'female',
    2,
    'Brazilian Shorthair',
    'Failed a technical interview, needs a new home.',
    '2019-09-15T00:00:00.615Z'
  ),
  (
    'http://placekitten.com/200/300',
    'A beautiful kitten who needs a home',
    'Morty',
    'male',
    7,
    'Highlander',
    'Abandoned outside in a basket with a note.',
    '2019-08-15T00:00:00.615Z'
  );

INSERT INTO
  dogs (
    imageURL,
    imageDescription,
    name,
    gender,
    age,
    breed,
    story,
    dateEntered
  )
VALUES
  (
    'https://dog.ceo/api/breed/hound/images/random',
    'A noble hound with sad eyes.',
    'Dodger',
    'male',
    4,
    'Hound',
    'Hounded by the ghosts of his past.',
    '2019-11-15T00:00:00.615Z'
  ),
  (
    'https://dog.ceo/api/breed/beagle/images/random',
    'The most beautiful beagle in the world',
    'Mimi',
    'female',
    1,
    'Beagle',
    'Rescued thirteen babies from a fire.',
    '2019-07-15T00:00:00.615Z'
  ),
  (
    'https://dog.ceo/api/breed/retriever-chesapeake/images/random',
    'The noble chesapeake retriever, doing cute things',
    'Moanna',
    'female',
    5,
    'Chesapeake Retriever',
    'Discovered on a remote island.',
    '2019-11-12T00:00:00.615Z'
  ),
  (
    'https://dog.ceo/api/breed/ridgeback-rhodesian/images/random',
    'An extremely earnest looking dog',
    'Lipton',
    'male',
    13,
    'Rhodesian Ridgeback',
    'Was too honest with his prior owner.',
    '2019-03-05T00:00:00.615Z'
  );

COMMIT;