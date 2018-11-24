// https://www.npmjs.com/package/faker

module.exports = [
  {
    groupName: 'address',
    memberNames: [
      'zipCode',
      'city',
      'cityPrefix',
      'citySuffix',
      'streetName',
      'streetAddress',
      'streetSuffix',
      'streetPrefix',
      'secondaryAddress',
      'county',
      'country',
      'countryCode',
      'state',
      'stateAbbr',
      'latitude',
      'longitude'
    ]
  },
  {
    groupName: 'commerce',
    memberNames: [
      'color',
      'department',
      'productName',
      'price',
      'productAdjective',
      'productMaterial',
      'product'
    ]
  },
  {
    groupName: 'company',
    memberNames: [
      'suffixes',
      'companyName',
      'companySuffix',
      'catchPhrase',
      'bs',
      'catchPhraseAdjective',
      'catchPhraseDescriptor',
      'catchPhraseNoun',
      'bsAdjective',
      'bsBuzz',
      'bsNoun'
    ]
  },
  {
    groupName: 'database',
    memberNames: ['column', 'type', 'collation', 'engine']
  },
  {
    groupName: 'date',
    memberNames: ['past', 'future', 'between', 'recent', 'month', 'weekday']
  },
  {
    groupName: 'finance',
    memberNames: [
      'account',
      'accountName',
      'mask',
      'amount',
      'transactionType',
      'currencyCode',
      'currencyName',
      'currencySymbol',
      'bitcoinAddress',
      'iban',
      'bic'
    ]
  },
  {
    groupName: 'hacker',
    memberNames: [
      'abbreviation',
      'adjective',
      'noun',
      'verb',
      'ingverb',
      'phrase'
    ]
  },
  {
    groupName: 'helpers',
    memberNames: [
      'randomize',
      'slugify',
      'replaceSymbolWithNumber',
      'replaceSymbols',
      'shuffle',
      'mustache',
      'createCard',
      'contextualCard',
      'userCard',
      'createTransaction'
    ]
  },
  {
    groupName: 'image',
    memberNames: [
      'image',
      'avatar',
      'imageUrl',
      'abstract',
      'animals',
      'business',
      'cats',
      'city',
      'food',
      'nightlife',
      'fashion',
      'people',
      'nature',
      'sports',
      'technics',
      'transport',
      'dataUri'
    ]
  },
  {
    groupName: 'internet',
    memberNames: [
      'avatar',
      'email',
      'exampleEmail',
      'userName',
      'protocol',
      'url',
      'domainName',
      'domainSuffix',
      'domainWord',
      'ip',
      'ipv6',
      'userAgent',
      'color',
      'mac',
      'password'
    ]
  },
  {
    groupName: 'lorem',
    memberNames: [
      'word',
      'words',
      'sentence',
      'slug',
      'sentences',
      'paragraph',
      'paragraphs',
      'text',
      'lines'
    ]
  },
  {
    groupName: 'name',
    memberNames: [
      'firstName',
      'lastName',
      'findName',
      'jobTitle',
      'prefix',
      'suffix',
      'title',
      'jobDescriptor',
      'jobArea',
      'jobType'
    ]
  },
  {
    groupName: 'phone',
    memberNames: ['phoneNumber', 'phoneNumberFormat', 'phoneFormats']
  },
  {
    groupName: 'random',
    memberNames: [
      'number',
      'arrayElement',
      'objectElement',
      'uuid',
      'boolean',
      'word',
      'words',
      'image',
      'locale',
      'alphaNumeric'
    ]
  },
  {
    groupName: 'system',
    memberNames: [
      'fileName',
      'commonFileName',
      'mimeType',
      'commonFileType',
      'commonFileExt',
      'fileType',
      'fileExt',
      'directoryPath',
      'filePath',
      'semver'
    ]
  }
];
