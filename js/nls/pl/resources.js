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
    "error": "Nie można utworzyć",
    "licenseError": {
      "message": "Twoje konto nie jest licencjonowane do korzystania z aplikacji konfigurowalnych, które nie są publiczne. Poproś administratora instytucji o przypisanie typu użytkownika, który obejmuje licencję na kluczowe aplikacje lub licencję na kluczowe aplikacje dodatkowe.",
      "title": "Nie licencjonowano"
    },
    "warningMessageTitle": "Ograniczona obsługa przeglądarki",
    "warningMessageAGOL": "Korzystasz z nieaktualnej przeglądarki. Niektóre części tej aplikacji mogą nie działać w optymalny sposób lub wcale w tej przeglądarce. W przyszłości ta przeglądarka nie będzie obsługiwana.</br></br>Używaj najnowszych wersji przeglądarek <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> lub <edge-link>Microsoft Edge</edge-link>.</br></br>Więcej informacji o obsługiwanych przeglądarkach można znaleźć w dokumentacji. Opublikuj swoją opinię w <feedback-link>GeoNet, społeczności Esri</feedback-link>.",
    "warningMessageEnterprise": "Używasz przeglądarki, która nie jest już obsługiwana. Niektóre części tej aplikacji mogą nie działać w tej przeglądarce optymalnie lub wcale.</br></br>Używaj najnowszych wersji przeglądarek <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> lub <edge-link>Microsoft Edge</edge-link>.",
    "zoomInTooltip": "Powiększ",
    "zoomOutTooltip": "Pomniejsz",
    "geolocationTooltip": "Bieżąca lokalizacja"
  },
  "main": {
    "noGroup": "Nie skonfigurowano żadnej grupy",
    "submitReportButtonText": "Prześlij raport",
    "gotoListViewTooltip": "Widok listy",
    "noFeatureGeomtery": "Nie można wyświetlić obiektu",
    "featureOutsideAOIMessage": "Nie można dodać funkcji poza analizowanym obszarem",
    "noEditingPermissionsMessage": "Nie masz uprawnień do wykonania tego działania.",
    "basemapGalleryText": "Galeria map bazowych",
    "basemapThumbnailAltText": "Kliknij, aby wczytać ${basemapTitle} ${index} z ${totalBasemaps}",
    "legendText": "Legenda",
    "featureNotFoundMessage": "Nie znaleziono żądanego obiektu",
    "backButton": "wstecz",
    "panelCloseButton": "Zamknij"
  },
  "signin": {
    "guestSigninText": "Kontynuuj jako gość",
    "signInOrText": "Or",
    "signinOptionsText": "Zaloguj się, używając:",
    "noGroupNameText": "Zaloguj się",
    "guestLoginTooltip": "Zaloguj się jako gość",
    "facebookLoginTooltip": "Zaloguj się, używając danych dostępowych z serwisu Facebook",
    "twitterLoginTooltip": "Zaloguj się, używając danych dostępowych z serwisu Twitter",
    "googlePlusLoginTooltip": "Zaloguj się, używając danych dostępowych z serwisu Google+",
    "agolLoginTooltip": "Zaloguj się, używając danych dostępowych z serwisu ArcGIS"
  },
  "webMapList": {
    "owner": "Właściciel",
    "created": "Data utworzenia",
    "modified": "Ostatnia modyfikacja",
    "description": "Opis",
    "snippet": "Podsumowanie",
    "licenseInfo": "Ograniczenia dostępu i użytkowania",
    "accessInformation": "Udostępniający zasoby",
    "tags": "Znaczniki",
    "numViews": "Liczba wyświetleń",
    "avgRating": "Ocena",
    "noWebMapInGroup": "Skonfigurowana grupa jest nieprawidłowa lub tej grupie nie udostępniono jeszcze żadnych elementów.",
    "infoBtnToolTip": "Informacje o mapie"
  },
  "issueWall": {
    "noResultsFound": "Nie znaleziono żadnych obiektów",
    "noResultsFoundInCurrentBuffer": "Nie znaleziono żadnych obiektów niedaleko Ciebie",
    "unableToFetchFeatureError": "Nie można zakończyć czynności",
    "gotoWebmapListTooltip": "Przejdź do głównej listy",
    "gotoMapViewTooltip": "Widok mapy"
  },
  "appHeader": {
    "help": "Pomoc",
    "myReport": "Moje zgłoszenia",
    "signIn": "Zaloguj się",
    "signOut": "Wyloguj się",
    "signInTooltip": "Sign in",
    "signOutTooltip": "Wyloguj się",
    "myReportTooltip": "Wyświetl moje zgłoszenia",
    "share": "Udostępnij",
    "shareDialogTitle": "Okno dialogowe udostępniania",
    "shareDialogAppURLLabel": "Adres URL aplikacji",
    "mobileHamburger": "Hamburger"
  },
  "geoform": {
    "enterInformation": "Szczegóły",
    "selectAttachments": "Załączniki",
    "selectFileText": "Przeglądaj",
    "enterLocation": "Lokalizacja",
    "reportItButton": "Zgłoś",
    "editReportButton": "Aktualizuj",
    "cancelButton": "Anuluj",
    "requiredField": "(wymagane)",
    "selectDefaultText": "Wybierz&hellip;",
    "invalidInputValue": "Podaj właściwą wartość.",
    "noFieldsConfiguredMessage": "Pola warstw nie są skonfigurowane do rejestrowania danych",
    "invalidSmallNumber": "Wprowadź liczbę całkowitą",
    "invalidNumber": "Wprowadź liczbę całkowitą",
    "invalidFloat": "Wprowadź liczbę",
    "invalidDouble": "Wprowadź liczbę",
    "requiredFields": "Podaj wartości wszystkich wymaganych pól",
    "selectLocation": "Wybierz lokalizację dla raportu",
    "numericRangeHintMessage": "${openStrong}Wskazówka:${closeStrong} Wartość minimalna ${minValue} i Wartość maksymalna ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Wskazówka:${closeStrong} Data minimalna ${minValue} i Data maksymalna ${maxValue}",
    "errorsInApplyEdits": "Nie można przesyłać wartości.",
    "attachmentSelectedMsg": "wybrany(-e/-ych) załącznik(-i/-ów)",
    "attachmentUploadStatus": "Nie udało się przesłać ${failed} z ${total} załączników",
    "geoLocationError": "Bieżąca lokalizacja nie jest dostępna",
    "geoLocationOutOfExtent": "Bieżąca lokalizacja jest poza zakresem mapy bazowej",
    "submitButtonTooltip": "Prześlij",
    "cancelButtonTooltip": "Anuluj",
    "geoformBackButtonTooltip": "Wróć na listę",
    "locationSelectionHintForPointLayer": "Dotknij mapy, aby narysować lokalizację.",
    "locationSelectionHintForPolygonLayer": "Dotknij mapy, aby narysować lokalizację. Dotknij dwukrotnie, aby zakończyć rysowanie.",
    "locationSelectionHintForPointLayerDesktop": "Kliknij mapę, aby narysować lokalizację.",
    "locationSelectionHintForPolygonLayerDesktop": "Kliknij mapę, aby narysować lokalizację. Kliknij dwukrotnie, aby zakończyć rysowanie.",
    "locationDialogTitle": "Wybierz lokalizację dla raportu",
    "locationDialogContent": "Czy na pewno chcesz użyć lokalizacji obrazu?",
    "errorMessageText": "${message} dla pola ${fieldName}",
    "deleteAttachmentBtnText": "Usuń załącznik"
  },
  "locator": {
    "addressText": "Adres:",
    "usngText": "USNG",
    "mgrsText": "MGRS",
    "latLongText": "Szer. geogr./dł. geogr.",
    "invalidSearch": "Nie znaleziono wyników",
    "locatorPlaceholder": "Wprowadź adres do wyszukania",
    "locationOutOfExtent": "Lokalizacja znajduje się poza obszarem zgłoszenia",
    "searchButtonTooltip": "Szukaj",
    "clearButtonTooltip": "Wyczyść wartość wyszukiwania"
  },
  "myIssues": {
    "title": "Moje zgłoszenia",
    "myIssuesTooltip": "Moje zgłoszenia",
    "noResultsFound": "Nie znaleziono zgłoszeń"
  },
  "itemDetails": {
    "likeButtonLabel": "",
    "likeButtonTooltip": "Zgadzam się",
    "commentButtonLabel": "",
    "commentButtonTooltip": "Zostaw odpowiedź",
    "galleryButtonLabel": "",
    "galleryButtonTooltip": "Zobacz załączone dokumenty",
    "mapButtonLabel": "Wyświetl na mapie",
    "mapButtonTooltip": "Wyświetl lokalizację tego zgłoszenia",
    "commentsListHeading": "Comments",
    "unableToUpdateVoteField": "Oddanego głosu nie można teraz zliczyć.",
    "gotoIssueListTooltip": "Wyświetl listę zgłoszeń",
    "deleteMessage": "Czy na pewno chcesz usunąć?"
  },
  "itemList": {
    "likesForThisItemTooltip": "Liczba głosów",
    "loadMoreButtonText": "Wczytaj więcej..."
  },
  "comment": {
    "commentsFormHeading": "Komentarz",
    "commentsFormSubmitButton": "Prześlij komentarz",
    "commentsFormEditButton": "Aktualizuj komentarz",
    "commentsFormCancelButton": "Anuluj",
    "errorInSubmittingComment": "Nie można przesłać komentarza.",
    "commentSubmittedMessage": "Dziękujemy za wyrażenie opinii.",
    "emptyCommentMessage": "Wprowadź komentarz.",
    "placeHolderText": "Wpisz komentarz",
    "noCommentsAvailableText": "Brak dostępnych komentarzy",
    "remainingTextCount": "Pozostało znaków: ${0}",
    "showNoText": "Nie",
    "selectAttachments": "Załączniki",
    "selectFileText": "Przeglądaj",
    "attachmentSelectedMsg": "wybrany(-e/-ych) załącznik(-i/-ów)",
    "attachmentHeaderText": "Załączniki",
    "unknownCommentAttachment": "PLIK",
    "editRecordText": "Edytuj",
    "deleteRecordText": "Usuwanie",
    "deleteCommentFailedMessage": "Nie można usunąć komentarza"
  },
  "gallery": {
    "galleryHeaderText": "Galeria",
    "noAttachmentsAvailableText": "Nie znaleziono załączników"
  },
  "dialog": {
    "okButton": "OK",
    "cancelButton": "Anuluj",
    "yesButton": "Tak",
    "noButton": "Nie"
  }
});