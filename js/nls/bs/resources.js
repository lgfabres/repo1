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
    "error": "Nije moguće stvoriti kartu",
    "licenseError": {
      "message": "Vaš račun nije licenciran za upotrebu konfigurabilnih appova koji nisu javni. Obratite se administratoru svoje organizacije da vam dodijeli vrstu korisnika koja sadrži licencu za osnovne appove ili za dodatke za osnovne appove.",
      "title": "Nema licence"
    },
    "warningMessageTitle": "Ograničena podrška za preglednik",
    "warningMessageAGOL": "Koristite zastarjeli preglednik. Neki dijelovi ove aplikacije možda neće funkcionirati optimalno ili uopće neće funkcionirati u ovom pregledniku. Podrška za ovaj preglednik ukinut će se u budućnosti.</br></br>Koristite najnovije verzije preglednika <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link>, ili <edge-link>Microsoft Edge</edge-link>.</br></br>Za više informacija o podršci za preglednike pogledajte našu dokumentaciju. Pošaljite svoje povratne informacije kroz <feedback-link>GeoNet, Esrijevu zajednicu</feedback-link>.",
    "warningMessageEnterprise": "Upotrebljavate preglednik koji više nije podržan. Neki dijelovi ove aplikacije možda neće raditi optimalno ili uopće neće raditi u ovom pregledniku.</br></br>Koristite najnovije verzije preglednika <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link>, ili <edge-link>Microsoft Edge</edge-link>.",
    "zoomInTooltip": "Povećaj",
    "zoomOutTooltip": "Smanji",
    "geolocationTooltip": "Trenutačna lokacija"
  },
  "main": {
    "noGroup": "Nema konfiguriranih grupa",
    "submitReportButtonText": "Podnesi izvješće",
    "gotoListViewTooltip": "Prikaz u popisu",
    "noFeatureGeomtery": "Geoobjekt se ne može prikazati",
    "featureOutsideAOIMessage": "Geoobjekt se ne može dodati izvan radnog područja",
    "noEditingPermissionsMessage": "Nemate dopuštenje za izvođenje ove radnje.",
    "basemapGalleryText": "Galerija kartografskih podloga",
    "basemapThumbnailAltText": "Kliknite za učitavanje ${basemapTitle} ${index} od ${totalBasemaps}",
    "legendText": "Legenda",
    "featureNotFoundMessage": "Zatraženi geoobjekt nije pronađen",
    "backButton": "natrag",
    "panelCloseButton": "Zatvori"
  },
  "signin": {
    "guestSigninText": "Nastavi kao gost",
    "signInOrText": "ili",
    "signinOptionsText": "Prijava kao:",
    "noGroupNameText": "Prijavite se",
    "guestLoginTooltip": "Prijavite se kao gost",
    "facebookLoginTooltip": "Prijava preko Facebooka",
    "twitterLoginTooltip": "Prijava preko Twittera",
    "googlePlusLoginTooltip": "Prijava preko Google+",
    "agolLoginTooltip": "Prijavite se preko ArcGIS-a"
  },
  "webMapList": {
    "owner": "Vlasnik",
    "created": "Datum izrade",
    "modified": "Datum izmjene",
    "description": "Opis",
    "snippet": "Sažetak",
    "licenseInfo": "Ograničenja pristupa i upotrebe",
    "accessInformation": "Krediti",
    "tags": "Oznake",
    "numViews": "Broj prikaza",
    "avgRating": "Ocjena",
    "noWebMapInGroup": "Konfigurirana grupa nije valjana ili s grupom još nisu podijeljene stavke.",
    "infoBtnToolTip": "Informacije o karti"
  },
  "issueWall": {
    "noResultsFound": "Nema geoobjekata",
    "noResultsFoundInCurrentBuffer": "Nema geoobjekata u vašoj blizini",
    "unableToFetchFeatureError": "Nije moguće dovršiti radnju",
    "gotoWebmapListTooltip": "Idi na glavni popis",
    "gotoMapViewTooltip": "Prikaz karte"
  },
  "appHeader": {
    "help": "Izaberite stil za alat klizača.",
    "myReport": "Moji podnesci",
    "signIn": "Prijava",
    "signOut": "Odjava",
    "signInTooltip": "Prijava",
    "signOutTooltip": "Odjava",
    "myReportTooltip": "Prikaži moje podneske",
    "share": "Podijeli",
    "shareDialogTitle": "Podijeli dijaloški okvir",
    "shareDialogAppURLLabel": "URL aplikacije",
    "mobileHamburger": "Hamburger"
  },
  "geoform": {
    "enterInformation": "Pojedinosti",
    "selectAttachments": "Privitci",
    "selectFileText": "Pregledaj",
    "enterLocation": "Lokacija",
    "reportItButton": "Prijavi",
    "editReportButton": "Ažuriraj",
    "cancelButton": "Odustani",
    "requiredField": "(obavezno)",
    "selectDefaultText": "Odabir&hellip;",
    "invalidInputValue": "Unesite valjanu vrijednost.",
    "noFieldsConfiguredMessage": "Polja slojeva nisu konfigurirana za prikupljanje podataka",
    "invalidSmallNumber": "Unesite cijeli broj",
    "invalidNumber": "Unesite cijeli broj",
    "invalidFloat": "Unesite broj",
    "invalidDouble": "Unesite broj",
    "requiredFields": "Upišite vrijednosti za sva obavezna polja",
    "selectLocation": "Odaberite lokaciju za izvješće",
    "numericRangeHintMessage": "${openStrong}Podsjetnik:${closeStrong} minimalna vrijednost ${minValue} i maksimalna vrijednost ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Podsjetnik:${closeStrong} minimalni datum ${minValue} i maksimalni datum ${maxValue}",
    "errorsInApplyEdits": "Nije moguće podnijeti vrijednosti.",
    "attachmentSelectedMsg": "odabrani privitak(-ci)",
    "attachmentUploadStatus": "${failed} od ${total} privit(a)ka nije poslano",
    "geoLocationError": "Trenutačna lokacija nije dostupna",
    "geoLocationOutOfExtent": "Trenutačna lokacija izvan je obuhvata kartografske podloge",
    "submitButtonTooltip": "Pošalji",
    "cancelButtonTooltip": "Odustani",
    "geoformBackButtonTooltip": "Povratak na popis",
    "locationSelectionHintForPointLayer": "Dodirnite kartu za crtanje lokacije.",
    "locationSelectionHintForPolygonLayer": "Dodirnite kartu za crtanje lokacije. Dva puta dodirnite kartu za dovršavanje crteža.",
    "locationSelectionHintForPointLayerDesktop": "Kliknite na kartu za crtanje lokacije.",
    "locationSelectionHintForPolygonLayerDesktop": "Kliknite kartu za crtanje lokacije. Dva puta kliknite na kartu za dovršavanje crteža.",
    "locationDialogTitle": "Odaberite lokaciju za izvješće",
    "locationDialogContent": "Jeste li sigurni da želite upotrijebiti lokaciju slike?",
    "errorMessageText": "${message} za polje ${fieldName}",
    "deleteAttachmentBtnText": "Izbriši privitak"
  },
  "locator": {
    "addressText": "Adresa:",
    "usngText": "USNG",
    "mgrsText": "MGRS",
    "latLongText": "Geografska dužina/širina",
    "invalidSearch": "Nema rezultata",
    "locatorPlaceholder": "Unesite adresu za pretraživanje",
    "locationOutOfExtent": "Lokacija je izvan područja podneska",
    "searchButtonTooltip": "Pretraži",
    "clearButtonTooltip": "Očisti vrijednost pretrage"
  },
  "myIssues": {
    "title": "Moji podnesci",
    "myIssuesTooltip": "Moji podnesci",
    "noResultsFound": "Nisu pronađeni podnesci"
  },
  "itemDetails": {
    "likeButtonLabel": "",
    "likeButtonTooltip": "Slažem se",
    "commentButtonLabel": "",
    "commentButtonTooltip": "Odgovori",
    "galleryButtonLabel": "",
    "galleryButtonTooltip": "Vidi priložene dokumente",
    "mapButtonLabel": "Prikaži na karti",
    "mapButtonTooltip": "Prikaži lokaciju ovog podneska",
    "commentsListHeading": "Komentari",
    "unableToUpdateVoteField": "Vaš se glas trenutačno ne može pribrojiti.",
    "gotoIssueListTooltip": "Prikaži popis podnesaka",
    "deleteMessage": "Jeste li sigurni da želite izbrisati?"
  },
  "itemList": {
    "likesForThisItemTooltip": "Broj glasova",
    "loadMoreButtonText": "Učitaj više..."
  },
  "comment": {
    "commentsFormHeading": "Komentiraj",
    "commentsFormSubmitButton": "Pošalji komentar",
    "commentsFormEditButton": "Ažuriraj komentar",
    "commentsFormCancelButton": "Odustani",
    "errorInSubmittingComment": "Nije moguće poslati komentar.",
    "commentSubmittedMessage": "Hvala vam na povratnoj informaciji.",
    "emptyCommentMessage": "Unesite komentar.",
    "placeHolderText": "Upišite komentar",
    "noCommentsAvailableText": "Nema dostupnih komentara",
    "remainingTextCount": "preostalo ${0} znakova",
    "showNoText": "Ne",
    "selectAttachments": "Privici",
    "selectFileText": "Pregledaj",
    "attachmentSelectedMsg": "odabrano privitaka",
    "attachmentHeaderText": "Privici",
    "unknownCommentAttachment": "DATOTEKA",
    "editRecordText": "Uredi",
    "deleteRecordText": "Izbriši",
    "deleteCommentFailedMessage": "Nije moguće izbrisati komentar"
  },
  "gallery": {
    "galleryHeaderText": "Galerija",
    "noAttachmentsAvailableText": "Nema privitaka"
  },
  "dialog": {
    "okButton": "Odbaci knjižnu oznaku",
    "cancelButton": "Odustani",
    "yesButton": "Da",
    "noButton": "Ne"
  }
});