/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  "map": {
    "error": "Kan ikke oprette kort",
    "licenseError": {
      "message": "Din konto har ikke licens til at bruge Konfigurérbare apps, der ikke er offentlige. Bed din organisationsadministrator om at knytte dig til en brugertype, der omfatter Essential Apps eller en add-on Essential Apps-licens.",
      "title": "Ikke licenseret"
    },
    "warningMessageTitle": "Begrænset browserstøtte",
    "warningMessageAGOL": "Du anvender en browser, der er udfaset. Nogle dele af denne applikation fungerer muligvis ikke optimalt - eller fungerer slet ikke - i denne browser. Understøttelse af denne browser vil blive udfaset i nær fremtid.</br></br>Brug de nyeste versioner af <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> eller <edge-link>Microsoft Edge</edge-link>.</br></br>For yderligere oplysninger om browserunderstøttelse, se vores dokumentation. Send din feedback via <feedback-link>GeoNet, Esri-fællesskabet</feedback-link>.",
    "warningMessageEnterprise": "Du anvender en browser, der ikke længere understøttes. Nogle dele af denne applikation fungerer muligvis ikke optimalt i denne browser, eller de fungerer slet ikke.</br></br>Brug de nyeste versioner af <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> eller <edge-link>Microsoft Edge</edge-link>.",
    "zoomInTooltip": "Zoom ind",
    "zoomOutTooltip": "Zoom ud",
    "geolocationTooltip": "Aktuel placering"
  },
  "main": {
    "noGroup": "Ingen gruppe konfigureret",
    "submitReportButtonText": "Send en rapport",
    "gotoListViewTooltip": "Listevisning",
    "noFeatureGeomtery": "Objekt kan ikke vises",
    "featureOutsideAOIMessage": "Objekt kan ikke tilføjes uden for undersøgelsesområdet",
    "noEditingPermissionsMessage": "Du har ikke tilladelse til at udføre denne handling.",
    "basemapGalleryText": "Galleri over baggrundskort",
    "basemapThumbnailAltText": "Klik for at indlæse ${basemapTitle} ${index} af ${totalBasemaps}",
    "legendText": "Signaturforklaring",
    "featureNotFoundMessage": "Det objekt, der er blevet anmodet om, kunne ikke findes",
    "backButton": "tilbage",
    "panelCloseButton": "Luk"
  },
  "signin": {
    "guestSigninText": "Fortsæt som gæst",
    "signInOrText": "Eller",
    "signinOptionsText": "Log ind med",
    "noGroupNameText": "Log ind",
    "guestLoginTooltip": "Log ind som gæst",
    "facebookLoginTooltip": "Log ind med Facebook",
    "twitterLoginTooltip": "Log ind med Twitter",
    "googlePlusLoginTooltip": "Log ind med Google+",
    "agolLoginTooltip": "Log ind med ArcGIS"
  },
  "webMapList": {
    "owner": "Ejer",
    "created": "Oprettelsesdato",
    "modified": "Dato for ændring",
    "description": "Beskrivelse",
    "snippet": "Oversigt",
    "licenseInfo": "Få adgang til og brug begrænsninger",
    "accessInformation": "Credits",
    "tags": "Nøgleord",
    "numViews": "Antal visninger",
    "avgRating": "Vurdering",
    "noWebMapInGroup": "Konfigureret gruppe er ugyldig, eller ingen elementer er endnu blevet delt med denne gruppe.",
    "infoBtnToolTip": "Kortoplysninger"
  },
  "issueWall": {
    "noResultsFound": "Der blev ikke fundet nogen objekter",
    "noResultsFoundInCurrentBuffer": "Der blev ikke fundet nogen objekter i nærheden af dig",
    "unableToFetchFeatureError": "Kan ikke fuldføre handling",
    "gotoWebmapListTooltip": "Gå til hovedlisten",
    "gotoMapViewTooltip": "Kortvisning"
  },
  "appHeader": {
    "help": "Hjælp",
    "myReport": "Mine afsendelser",
    "signIn": "Log ind",
    "signOut": "Log ud",
    "signInTooltip": "Sign in",
    "signOutTooltip": "Log ud",
    "myReportTooltip": "Vis mine afsendelser",
    "share": "Opdatér",
    "shareDialogTitle": "Delingsdialogboks",
    "shareDialogAppURLLabel": "Applikations-URL",
    "mobileHamburger": "Hamburger"
  },
  "geoform": {
    "enterInformation": "Oplysninger",
    "selectAttachments": "Vedhæftninger",
    "selectFileText": "Gennemse",
    "enterLocation": "Sted",
    "reportItButton": "Rapportér det",
    "editReportButton": "Apps",
    "cancelButton": "Annuller",
    "requiredField": "(obligatorisk)",
    "selectDefaultText": "Select&hellip;",
    "invalidInputValue": "Indtast en gyldig værdi.",
    "noFieldsConfiguredMessage": "Lagfelter er ikke konfigureret til at hente data",
    "invalidSmallNumber": "Indtast et heltal",
    "invalidNumber": "Indtast et heltal",
    "invalidFloat": "Indtast et tal",
    "invalidDouble": "Indtast et tal",
    "requiredFields": "Angiv værdier for alle påkrævede felter",
    "selectLocation": "Vælg en placering for din rapport",
    "numericRangeHintMessage": "${openStrong}Hint:${closeStrong} Minimumværdi ${minValue} og maksimumværdi ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Hint:${closeStrong} Minimumdato ${minValue} og maksimumdato ${maxValue}",
    "errorsInApplyEdits": "Værdier kunne ikke afsendes.",
    "attachmentSelectedMsg": "vedhæftning(er) valgt",
    "attachmentUploadStatus": "${failed} af ${total} vedhæftning(er) kunne ikke overføres",
    "geoLocationError": "Aktuel position er ikke tilgængelig",
    "geoLocationOutOfExtent": "Aktuel position ligger uden for baggrundskortets udstrækning",
    "submitButtonTooltip": "Indsend",
    "cancelButtonTooltip": "Annuller",
    "geoformBackButtonTooltip": "Returnér til liste",
    "locationSelectionHintForPointLayer": "Tryk på kortet for at tegne placeringen.",
    "locationSelectionHintForPolygonLayer": "Tryk på kortet for at tegne placeringen. Dobbeltklik for at fuldføre tegningen.",
    "locationSelectionHintForPointLayerDesktop": "Klik på kortet for at tegne placeringen.",
    "locationSelectionHintForPolygonLayerDesktop": "Klik på kortet for at tegne placeringen. Dobbeltklik for at fuldføre tegningen.",
    "locationDialogTitle": "Vælg placering til rapport",
    "locationDialogContent": "Er du sikker på, at du vil bruge billedplaceringen?",
    "errorMessageText": "${message} for feltet ${fieldName}",
    "deleteAttachmentBtnText": "Slet vedhæftning"
  },
  "locator": {
    "addressText": "Adresse:",
    "usngText": "USNG",
    "mgrsText": "MGRS",
    "latLongText": "Breddegrad/længdegrad",
    "invalidSearch": "Ingen resultater",
    "locatorPlaceholder": "Indtast en adresse, der skal søges efter",
    "locationOutOfExtent": "Placeringen ligger uden for afsendelsesområdet",
    "searchButtonTooltip": "Search",
    "clearButtonTooltip": "Ryd søgeværdi"
  },
  "myIssues": {
    "title": "Mine afsendelser",
    "myIssuesTooltip": "Mine afsendelser",
    "noResultsFound": "Ingen afsendelser fundet"
  },
  "itemDetails": {
    "likeButtonLabel": "",
    "likeButtonTooltip": "Jeg accepterer",
    "commentButtonLabel": "",
    "commentButtonTooltip": "Efterlad et svar",
    "galleryButtonLabel": "",
    "galleryButtonTooltip": "Se vedhæftede dokumenter",
    "mapButtonLabel": "Vis på kort",
    "mapButtonTooltip": "Vis placeringen af denne afsendelse",
    "commentsListHeading": "Comments",
    "unableToUpdateVoteField": "Din stemme kan ikke tælles på nuværende tidspunkt.",
    "gotoIssueListTooltip": "Vis listen med afsendelser",
    "deleteMessage": "Er du sikker på, at du vil slette?"
  },
  "itemList": {
    "likesForThisItemTooltip": "Antal stemmer",
    "loadMoreButtonText": "Indlæs mere..."
  },
  "comment": {
    "commentsFormHeading": "Kommentar",
    "commentsFormSubmitButton": "Send kommentar",
    "commentsFormEditButton": "Opdatér kommentar",
    "commentsFormCancelButton": "Annuller",
    "errorInSubmittingComment": "Kommentar kunne ikke indsendes.",
    "commentSubmittedMessage": "Tak for din feedback.",
    "emptyCommentMessage": "Indtast en kommentar.",
    "placeHolderText": "Skriv en kommentar",
    "noCommentsAvailableText": "ingen kommentarer tilgængelige",
    "remainingTextCount": "${0} tegn tilbage",
    "showNoText": "Nej",
    "selectAttachments": "Vedhæftninger",
    "selectFileText": "Gennemse",
    "attachmentSelectedMsg": "vedhæftning(er) valgt",
    "attachmentHeaderText": "Vedhæftninger",
    "unknownCommentAttachment": "FIL",
    "editRecordText": "Redigér",
    "deleteRecordText": "download fuldført",
    "deleteCommentFailedMessage": "Kan ikke slette kommentar"
  },
  "gallery": {
    "galleryHeaderText": "Galleri",
    "noAttachmentsAvailableText": "Ingen vedhæftede filer"
  },
  "dialog": {
    "okButton": "OK",
    "cancelButton": "Annuller",
    "yesButton": "Ja",
    "noButton": "Nej"
  }
});