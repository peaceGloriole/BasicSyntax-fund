function language(country) {

  let lang;

  if (country == `USA` || country == `England`) {
    lang = `English`;
    console.log(`English`);
  } else if (country == `Spain` || country == `Argentina` || country == `Mexico`) {
    lang = `Spanish`;
    console.log(`Spanish`);
  } else {
    console.log(`unknown`);
  }

}
language(`Mexico`)