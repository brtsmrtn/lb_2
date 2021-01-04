// URL validation function, links that pass and don't pass listed here https://stackoverflow.com/a/15855457
// FAILS ON 'https://www.google'
const validateLink = function (value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
};

// Parsing date function; NOT READY FOR DIFFERENT TIMEZONES
const parseDate = function (input) {
  let datetime = input.split("T");
  let date = datetime[0].split("-");
  let time = datetime[1].split(":");
  return new Date(
    date[0],
    date[1] - 1,
    date[2],
    time[0],
    time[1],
    time[2]
  ).toLocaleString();
};

// Get form, link input, submit input, message span and listing
const form = document.querySelector("form");
const input = document.getElementById("link");
const submit = document.getElementById("submit");
const help = document.getElementById("help");
const listing = document.querySelector("#listing tbody");

// Set name for currently used storage according to currently used version
const currentLocalStorage = "Link_Biscuit:v1";

// Initialize variables for records that will be listed
const records = new Array();
let numOfRecords = 0;

// Also initialize 'recordsTmp' which serves as a temporary storage for control whether previously stored records were successfully merged with the new record
let recordsTmp = new Array();

// Reset currentLocalStorage when testing
// localStorage.setItem(currentLocalStorage, "");

// Let's check whether localeStorage is already set and contains expected values
if (
  localStorage.getItem(currentLocalStorage) !== undefined &&
  localStorage.getItem(currentLocalStorage) !== null &&
  localStorage.getItem(currentLocalStorage) !== ""
) {
  records = JSON.parse(localStorage.getItem(currentLocalStorage)); // Parse previously added links
  if (records.length) {
    // All seems okay so display all previously added records and prepare temporary records version which we will need later
    input.focus(); // Since the user knows how the page works, the autofocus had been set on input
    recordsTmp = records;
    numOfRecords = records.length;
    for (let r = numOfRecords; r > 0; r--) {
      let store =
        `
				<tr>
					<td class="flex-7-5">` +
        (records[r - 1]["Metadata"][0]["State"] === 0 ? "Unread" : "Finished") +
        `</td>
					<td class="flex-80 left"><a href="` +
        records[r - 1]["Metadata"][0]["URL"] +
        `" target="blank">` +
        records[r - 1]["Metadata"][0]["URL"] +
        `</a></td>
					<td class="flex-12-5">` +
        parseDate(records[r - 1]["Metadata"][0]["Timestamp"]) +
        `</td>
				</tr>`;
      listing.insertAdjacentHTML("beforeend", store);
    }
    help.innerHTML =
      "&#9654; Wanna read something? You've got <b>" +
      numOfRecords +
      (numOfRecords === 1 ? "</b> link " : "</b> links ") +
      " here.";
  } else {
    // Something seems to be wrong with parsed records, let's rather reset
    localStorage.setItem(currentLocalStorage, "");
    (records = new Array()), (recordsTmp = new Array());
    help.innerHTML =
      "&#9654; Start with adding <i>http(s)</i> link in the field above.";
  }
} else {
  // We have clean version, no records yet
  help.innerHTML =
    "&#9654; Start with adding <i>http(s)</i> link in the field above.";
}
input.addEventListener("input", function () {
  // Check if link starts with http:// or https:// so we can enable the submit button
  if (
    input.value &&
    (input.value.startsWith("https://") || input.value.startsWith("http://"))
  ) {
    submit.disabled = false;
    if (validateLink(input.value)) {
      help.innerHTML = "&#9654; That link looks good.";
    } else {
      help.innerHTML = "&#9654; That link still needs some sauce.";
    }
  } else {
    submit.disabled = true;
    help.innerHTML = "&#9654; Beginning with <i>http(s)://</i> is a must.";
  }
});
form.addEventListener(
  "submit",
  function (event) {
    // Don't submit the form
    event.preventDefault();

    let url = input.value.trim().toLowerCase();
    if (validateLink(url)) {
      // Validation of URL passed

      // Initialize array for new record and set state and date
      let record = new Array();
      let state = 0;
      let time = new Date().toJSON().slice(0, 19);

      // Let's assume the link is not a duplicate
      let duplicate = false;

      if (
        records === "" ||
        records === undefined ||
        records === null ||
        numOfRecords === 0
      ) {
        // It will be our first record
        recordsTmp.push(
          ...[
            {
              Record: 1,
              Metadata: Array({ State: state, URL: url, Timestamp: time }),
            },
          ]
        ); // Create the record, store later
      } else {
        // We have already got some records so let's check if this one is not a duplicate
        for (let x = numOfRecords; x > 0; x--) {
          if (url === records[x - 1]["Metadata"][0]["URL"]) {
            duplicate = true;
            break;
          }
        }
        if (duplicate === false) {
          let lastRecord = records[numOfRecords - 1]["Record"]; // Find lastly added record
          let newRecordId = lastRecord + 1; // Get number of new record ID
          record.push(
            ...[
              {
                Record: newRecordId,
                Metadata: Array({ State: state, URL: url, Timestamp: time }),
              },
            ]
          ); // Create the record, store later
          Array.prototype.push.apply(recordsTmp, record); // Merge new record with previous records in 'recordsTmp'
        }
      }

      if (duplicate === false) {
        // We have no duplicates so we can add link and update listing

        // Here we test whether 'recordsTmp' really got one more link through merge so we can either continue or revert to previous records
        if (recordsTmp.length === numOfRecords + 1) {
          // Test passed
          numOfRecords++; // Update the number of records in DOM
          records = recordsTmp; // Unite the 'records' with 'recordsTmp'
          localStorage.setItem(currentLocalStorage, JSON.stringify(records)); // Finally store the record
          let update =
            `
					<tr>
						<td class="flex-7-5">Unread</td>
						<td class="flex-80 left"><a href="` +
            url +
            `" target="blank">` +
            url +
            `</a></td>
						<td class="flex-12-5">` +
            parseDate(time) +
            `</td>
					</tr>`;
          listing.insertAdjacentHTML("afterbegin", update); // Update listing

          help.classList.remove("err"); // Reset the color if error happened before
          help.innerHTML =
            "&#9654; Great. <b>" +
            numOfRecords +
            (numOfRecords === 1 ? "</b> link has " : "</b> links have ") +
            " been added so far.";
        } else {
          // Records weren't merged (assumably because of problem with localStorage) and our 'records' weren't harmed
          help.classList.add("err"); // This one is a serious issue
          help.innerHTML = "&#9654; You tried to hack the localStorage, right?";
        }

        // Clear input and disable submit
        submit.disabled = true;
        input.value = "";
        input.focus(); // Since the user knows how the page works, the autofocus had been set on input
      } else {
        // It was a duplicate
        help.classList.remove("err"); // Reset the color if error happened before
        help.innerHTML = "&#9654; This one I've got already!";

        // Only disable submit but leave input
        submit.disabled = true;
        input.focus(); // Since the user knows how the page works, the autofocus had been set on input
      }
    } else {
      // Validation of URL didn't pass
      help.classList.add("err"); // This one is a serious issue
      help.innerHTML = "&#9654; The link seems wrong, I'm sorry. Try again?";

      // Only disable submit but leave input
      submit.disabled = true;
      input.focus(); // Since the user knows how the page works, the autofocus had been set on input
    }
  },
  false
);
