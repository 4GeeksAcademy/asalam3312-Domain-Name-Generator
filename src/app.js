window.onload = function() {
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".org", ".net", ".edu"];

  let randomDomain = function(pronoun, adjective, noun) {
    let website = [];
    for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
      for (
        let adjectiveIndex = 0;
        adjectiveIndex < adjective.length;
        adjectiveIndex++
      ) {
        for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
          for (
            let domainIndex = 0;
            domainIndex < domain.length;
            domainIndex++
          ) {
            website.push(
              `${pronoun[pronounIndex]} ${adjective[adjectiveIndex]} ${noun[nounIndex]} ${domain[domainIndex]}`
            );
          }
        }
      }
    }
    console.log(website);
  };
  randomDomain(pronoun, adjective, noun);
};
