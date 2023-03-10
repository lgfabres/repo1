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
    "error": "Karte kann nicht erstellt werden",
    "licenseError": {
      "message": "Ihr Konto ist nicht für die Verwendung von nicht öffentlichen konfigurierbaren Apps lizenziert. Bitten Sie den Administrator der Organisation, Ihnen einen Benutzertyp mit Essential Apps oder eine Add-On-Lizenz für Essential Apps zuzuweisen.",
      "title": "Nicht lizenziert"
    },
    "warningMessageTitle": "Eingeschränkte Browser-Unterstützung",
    "warningMessageAGOL": "Sie verwenden einen Browser, der nicht mehr unterstützt wird. Teile dieser Anwendung funktionieren in diesem Browser möglicherweise nicht optimal oder überhaupt nicht. Die Unterstützung dieses Browsers wird zukünftig eingestellt.</br></br>Verwenden Sie die neueste Version von <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> oder <edge-link>Microsoft Edge</edge-link>.</br></br>Weitere Informationen zur Browser-Unterstützung finden Sie in unserer Dokumentation. Teilen Sie uns Ihr Feedback über die <feedback-link>Esri Community auf GeoNet</feedback-link> mit.",
    "warningMessageEnterprise": "Sie verwenden einen Browser, der nicht mehr unterstützt wird. Teile dieser Anwendung funktionieren in diesem Browser möglicherweise nicht optimal oder überhaupt nicht.</br></br>Verwenden Sie die neueste Version von <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> oder <edge-link>Microsoft Edge</edge-link>.",
    "zoomInTooltip": "Vergrößern",
    "zoomOutTooltip": "Verkleinern",
    "geolocationTooltip": "Aktueller Standort"
  },
  "main": {
    "noGroup": "Keine Gruppe konfiguriert",
    "submitReportButtonText": "Bericht senden",
    "gotoListViewTooltip": "Listenansicht",
    "noFeatureGeomtery": "Feature kann nicht angezeigt werden",
    "featureOutsideAOIMessage": "Feature kann nicht außerhalb des Untersuchungsgebiets hinzugefügt werden.",
    "noEditingPermissionsMessage": "Sie sind nicht berechtigt, diese Aktion auszuführen.",
    "basemapGalleryText": "Grundkartengalerie",
    "basemapThumbnailAltText": "Klicken Sie hier, um ${basemapTitle}, ${index} von ${totalBasemaps}, zu laden",
    "legendText": "Legende",
    "featureNotFoundMessage": "Das angeforderte Feature wurde nicht gefunden.",
    "backButton": "Zurück",
    "panelCloseButton": "Schließen"
  },
  "signin": {
    "guestSigninText": "Vorgang als Gast fortsetzen",
    "signInOrText": "Oder",
    "signinOptionsText": "Anmelden mit:",
    "noGroupNameText": "Melden Sie sich an",
    "guestLoginTooltip": "Als Gast anmelden",
    "facebookLoginTooltip": "Mit Facebook anmelden",
    "twitterLoginTooltip": "Mit Twitter anmelden",
    "googlePlusLoginTooltip": "Mit Google+ anmelden",
    "agolLoginTooltip": "Mit ArcGIS anmelden"
  },
  "webMapList": {
    "owner": "Besitzer",
    "created": "Erstellungsdatum",
    "modified": "Änderungsdatum",
    "description": "Beschreibung",
    "snippet": "Zusammenfassung",
    "licenseInfo": "Zugriffs- und Nutzungsbeschränkungen",
    "accessInformation": "Quellennachweise",
    "tags": "Tags",
    "numViews": "Anzahl der Aufrufe",
    "avgRating": "Bewertung",
    "noWebMapInGroup": "Die konfigurierte Gruppe ist ungültig oder es wurden noch keine Elemente für diese Gruppe freigegeben.",
    "infoBtnToolTip": "Karteninformationen"
  },
  "issueWall": {
    "noResultsFound": "Keine Features gefunden",
    "noResultsFoundInCurrentBuffer": "Keine Features in Ihrer Nähe gefunden",
    "unableToFetchFeatureError": "Vorgang kann nicht abgeschlossen werden",
    "gotoWebmapListTooltip": "Zur Hauptliste wechseln",
    "gotoMapViewTooltip": "Kartenansicht"
  },
  "appHeader": {
    "help": "Hilfe",
    "myReport": "Meine Übermittlungen",
    "signIn": "Anmelden",
    "signOut": "Abmelden",
    "signInTooltip": "Anmelden",
    "signOutTooltip": "Abmelden",
    "myReportTooltip": "Meine Übermittlungen anzeigen",
    "share": "Freigeben",
    "shareDialogTitle": "Dialogfeld \"Freigeben\"",
    "shareDialogAppURLLabel": "Anwendungs-URL",
    "mobileHamburger": "Menü"
  },
  "geoform": {
    "enterInformation": "Details",
    "selectAttachments": "Anlagen",
    "selectFileText": "Durchsuchen",
    "enterLocation": "Position",
    "reportItButton": "Melden",
    "editReportButton": "Aktualisieren",
    "cancelButton": "Abbrechen",
    "requiredField": "(erforderlich)",
    "selectDefaultText": "Auswählen&hellip;",
    "invalidInputValue": "Geben Sie einen gültigen Wert ein.",
    "noFieldsConfiguredMessage": "Layer-Felder sind nicht für die Erfassung von Daten konfiguriert",
    "invalidSmallNumber": "Geben Sie einen ganzzahligen Wert ein",
    "invalidNumber": "Geben Sie einen ganzzahligen Wert ein",
    "invalidFloat": "Geben Sie eine Zahl ein",
    "invalidDouble": "Geben Sie eine Zahl ein",
    "requiredFields": "Geben Sie Werte für alle erforderlichen Felder ein",
    "selectLocation": "Wählen Sie die Position für Ihren Bericht aus",
    "numericRangeHintMessage": "${openStrong}Hinweis:${closeStrong} Minimalwert ${minValue} und Maximalwert ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Hinweis:${closeStrong} Mindestdatum ${minValue} und maximal auswählbares Datum ${maxValue}",
    "errorsInApplyEdits": "Werte konnten nicht gesendet werden.",
    "attachmentSelectedMsg": "Anlage(n) ausgewählt",
    "attachmentUploadStatus": "${failed} von ${total} Anlage(n) konnte(n) nicht hochgeladen werden",
    "geoLocationError": "Aktuelle Position ist nicht verfügbar",
    "geoLocationOutOfExtent": "Aktuelle Position befindet sich außerhalb der Grundkartenausdehnung",
    "submitButtonTooltip": "Senden",
    "cancelButtonTooltip": "Abbrechen",
    "geoformBackButtonTooltip": "Zur Liste zurückkehren",
    "locationSelectionHintForPointLayer": "Tippen Sie auf die Karte, um die Position zu zeichnen.",
    "locationSelectionHintForPolygonLayer": "Tippen Sie auf die Karte, um die Position zu zeichnen. Doppeltippen Sie, um die Zeichnung abzuschließen.",
    "locationSelectionHintForPointLayerDesktop": "Klicken Sie auf die Karte, um die Position zu zeichnen.",
    "locationSelectionHintForPolygonLayerDesktop": "Klicken Sie auf die Karte, um die Position zu zeichnen. Doppelklicken Sie, um die Zeichnung abzuschließen.",
    "locationDialogTitle": "Verzeichnis für Bericht auswählen",
    "locationDialogContent": "Möchten Sie das Bildverzeichnis wirklich verwenden?",
    "errorMessageText": "${message} für Feld ${fieldName}",
    "deleteAttachmentBtnText": "Anlage löschen"
  },
  "locator": {
    "addressText": "Adresse:",
    "usngText": "USNG",
    "mgrsText": "MGRS",
    "latLongText": "Breitengrad/Längengrad",
    "invalidSearch": "Keine Ergebnisse gefunden",
    "locatorPlaceholder": "Zu suchende Adresse eingeben",
    "locationOutOfExtent": "Position muss sich außerhalb des Übermittlungsbereichs befinden",
    "searchButtonTooltip": "Suchen",
    "clearButtonTooltip": "Suchwert löschen"
  },
  "myIssues": {
    "title": "Meine Übermittlungen",
    "myIssuesTooltip": "Meine Übermittlungen",
    "noResultsFound": "Keine Übermittlungen gefunden"
  },
  "itemDetails": {
    "likeButtonLabel": "",
    "likeButtonTooltip": "Ich stimme zu",
    "commentButtonLabel": "",
    "commentButtonTooltip": "Antwort hinterlassen",
    "galleryButtonLabel": "",
    "galleryButtonTooltip": "Angehängte Dokumente anzeigen",
    "mapButtonLabel": "Auf Karte anzeigen",
    "mapButtonTooltip": "Die Position dieser Übermittlung anzeigen",
    "commentsListHeading": "Bemerkungen",
    "unableToUpdateVoteField": "Ihre Stimme kann zurzeit nicht gezählt werden.",
    "gotoIssueListTooltip": "Die Liste der Übermittlungen anzeigen",
    "deleteMessage": "Möchten Sie den Löschvorgang wirklich durchführen?"
  },
  "itemList": {
    "likesForThisItemTooltip": "Anzahl der Abstimmungen",
    "loadMoreButtonText": "Weitere laden..."
  },
  "comment": {
    "commentsFormHeading": "Kommentieren",
    "commentsFormSubmitButton": "Kommentar senden",
    "commentsFormEditButton": "Kommentar aktualisieren",
    "commentsFormCancelButton": "Abbrechen",
    "errorInSubmittingComment": "Kommentar konnte nicht gesendet werden.",
    "commentSubmittedMessage": "Vielen Dank für Ihr Feedback.",
    "emptyCommentMessage": "Geben Sie einen Kommentar ein.",
    "placeHolderText": "Kommentar eingeben",
    "noCommentsAvailableText": "Keine Kommentare verfügbar",
    "remainingTextCount": "${0} Zeichen verbleiben",
    "showNoText": "Nein",
    "selectAttachments": "Anlagen",
    "selectFileText": "Durchsuchen",
    "attachmentSelectedMsg": "Anlage(n) ausgewählt",
    "attachmentHeaderText": "Anlagen",
    "unknownCommentAttachment": "DATEI",
    "editRecordText": "Bearbeiten",
    "deleteRecordText": "Löschen",
    "deleteCommentFailedMessage": "Der Kommentar kann nicht gelöscht werden."
  },
  "gallery": {
    "galleryHeaderText": "Galerie",
    "noAttachmentsAvailableText": "Keine Anlagen gefunden"
  },
  "dialog": {
    "okButton": "OK",
    "cancelButton": "Abbrechen",
    "yesButton": "Ja",
    "noButton": "Nein"
  }
});