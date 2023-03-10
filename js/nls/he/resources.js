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
    "error": "לא ניתן ליצור מפה",
    "licenseError": {
      "message": "החשבון שלך אינו מורשה להשתמש באפליקציות הניתנות להגדרה שאינן ציבוריות. בקש ממנהל המערכת בארגון שלך להקצות לך סוג משתמש שכולל את Essential Apps או רישיון הרחבה ל-Essential Apps.",
      "title": "ללא רישיון"
    },
    "warningMessageTitle": "תמיכה מוגבלת בדפדפן",
    "warningMessageAGOL": "אתה משתמש בדפדפן שכבר יצא משימוש. ייתכן שכמה מחלקי האפליקציה הזו לא יעבדו בצורה אופטימלית או בכלל בדפדפן הזה. בעתיד לא תהיה יותר תמיכה בדפדפן הזה.</br></br>השתמש בגרסה העדכנית ביותר של <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> או <edge-link>Microsoft Edge</edge-link>.</br></br>למידע נוסף על תמיכה בדפדפן, ראה את התיעוד שלנו. הוסף משוב דרך <feedback-link>GeoNet, קהילת Esri</feedback-link>.",
    "warningMessageEnterprise": "אתה משתמש בדפדפן שאינו נתמך. ייתכן שכמה מחלקי האפליקציה הזו לא יעבדו בצורה אופטימלית או בכלל בדפדפן הזה.</br></br>השתמש בגרסה העדכנית ביותר של <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> או <edge-link>Microsoft Edge</edge-link>.",
    "zoomInTooltip": "התמקד פנימה",
    "zoomOutTooltip": "התמקד החוצה",
    "geolocationTooltip": "מיקום נוכחי"
  },
  "main": {
    "noGroup": "לא הוגדרה קבוצה",
    "submitReportButtonText": "שלח דו\"ח",
    "gotoListViewTooltip": "תצוגת רשימה",
    "noFeatureGeomtery": "לא ניתן להציג את הישות",
    "featureOutsideAOIMessage": "‏אין אפשרות להוסיף ישות מחוץ לאזור המחקר",
    "noEditingPermissionsMessage": "אין לך הרשאה לבצע את הפעולה הזו.",
    "basemapGalleryText": "גלרית מפות בסיס",
    "basemapThumbnailAltText": "לחת כדי לטעון את ‎${basemapTitle}‎‏ ‎${index} מתוך ${totalBasemaps}",
    "legendText": "מקרא",
    "featureNotFoundMessage": "הישות המבוקשת לא נמצאה",
    "backButton": "חזרה",
    "panelCloseButton": "סגור"
  },
  "signin": {
    "guestSigninText": "המשך כאורח",
    "signInOrText": "או",
    "signinOptionsText": "התחבר עם:",
    "noGroupNameText": "אנא התחבר",
    "guestLoginTooltip": "התחבר כאורח",
    "facebookLoginTooltip": "התחבר עם Facebook",
    "twitterLoginTooltip": "התחבר עם טוויטר",
    "googlePlusLoginTooltip": "התחבר עם Google+‎",
    "agolLoginTooltip": "התחבר עם ArcGIS"
  },
  "webMapList": {
    "owner": "יוצר",
    "created": "תאריך יצירה",
    "modified": "תאריך שינוי",
    "description": "תיאור",
    "snippet": "סיכום",
    "licenseInfo": "מגבלות גישה ושימוש",
    "accessInformation": "קרדיט",
    "tags": "תגיות",
    "numViews": "מספר מבטים",
    "avgRating": "דירוג",
    "noWebMapInGroup": "הקבוצה שהוגדרה לא חוקית או שלא שותפו עדיין פריטים עם קבוצה זו.",
    "infoBtnToolTip": "מידע על המפה"
  },
  "issueWall": {
    "noResultsFound": "לא נמצאו ישויות",
    "noResultsFoundInCurrentBuffer": "לא נמצאו ישויות בסביבתך",
    "unableToFetchFeatureError": "לא ניתן להשלים את הפעולה",
    "gotoWebmapListTooltip": "עבור לרשימה הראשית",
    "gotoMapViewTooltip": "מבט מפה"
  },
  "appHeader": {
    "help": "עזרה",
    "myReport": "התוספות שלי",
    "signIn": "התחבר",
    "signOut": "התנתק",
    "signInTooltip": "התחבר",
    "signOutTooltip": "יציאה",
    "myReportTooltip": "הצג את התוספות שלי",
    "share": "שיתוף",
    "shareDialogTitle": "דו-שיח לשיתוף",
    "shareDialogAppURLLabel": "URL של אפליקציה",
    "mobileHamburger": "תושב המבורג"
  },
  "geoform": {
    "enterInformation": "פרטים",
    "selectAttachments": "קישורים",
    "selectFileText": "נתב",
    "enterLocation": "מיקום",
    "reportItButton": "דווח על כך",
    "editReportButton": "עדכון",
    "cancelButton": "בטל",
    "requiredField": "(נדרש)",
    "selectDefaultText": "בחר&hellip;",
    "invalidInputValue": "הזן ערך חוקי.",
    "noFieldsConfiguredMessage": "שדות השכבות לא מוגדרים ללכידת נתונים",
    "invalidSmallNumber": "הזן מספר שלם",
    "invalidNumber": "הזן מספר שלם",
    "invalidFloat": "הזן מספר",
    "invalidDouble": "הזן מספר",
    "requiredFields": "ציין ערכים בכל שדות החובה",
    "selectLocation": "בחר מיקום לדוח",
    "numericRangeHintMessage": "${openStrong}רמז:${closeStrong} ערך מינימום ${minValue} וערך מקסימום ${maxValue}",
    "dateRangeHintMessage": "${openStrong}רמז:${closeStrong} תאריך מינימום ${minValue} ותאריך מקסימום ${maxValue}",
    "errorsInApplyEdits": "לא ניתן לשלוח את הערכים.",
    "attachmentSelectedMsg": "קבצים מצורפים נבחרו",
    "attachmentUploadStatus": "נכשלה ההעלאה של ${failed} מתוך ${total} קבצים מצורפים",
    "geoLocationError": "מיקום נוכחי לא זמין",
    "geoLocationOutOfExtent": "המיקום נוכחי נמצא מחוץ לגבולות מפת הבסיס",
    "submitButtonTooltip": "שלח",
    "cancelButtonTooltip": "בטל",
    "geoformBackButtonTooltip": "חזור לרשימה",
    "locationSelectionHintForPointLayer": "הקש על המפה כדי לצייר את המיקום.",
    "locationSelectionHintForPolygonLayer": "הקש על המפה כדי לצייר את המיקום. הקש פעמיים כדי להשלים את הציור.",
    "locationSelectionHintForPointLayerDesktop": "לחץ על המפה כדי לצייר את המיקום.",
    "locationSelectionHintForPolygonLayerDesktop": "לחץ על המפה כדי לצייר את המיקום. לחץ פעמיים כדי להשלים את הציור.",
    "locationDialogTitle": "בחר מיקום עבור הדוח",
    "locationDialogContent": "האם אתה בטוח שברצונך להשתמש במיקום התמונה?",
    "errorMessageText": "‎${message}‎ עבור השדה ‎${fieldName}‎",
    "deleteAttachmentBtnText": "מחק קישור"
  },
  "locator": {
    "addressText": "כתובת:",
    "usngText": "USNG",
    "mgrsText": "MGRS",
    "latLongText": "קו רוחב/אורך",
    "invalidSearch": "לא נמצאו תוצאות",
    "locatorPlaceholder": "הזן כתובת לחיפוש",
    "locationOutOfExtent": "המיקום נמצא מחוץ לאזור השליחה",
    "searchButtonTooltip": "חפש",
    "clearButtonTooltip": "נקה ערך חיפוש"
  },
  "myIssues": {
    "title": "התוספות שלי",
    "myIssuesTooltip": "התוספות שלי",
    "noResultsFound": "לא נמצאו תוספות"
  },
  "itemDetails": {
    "likeButtonLabel": "",
    "likeButtonTooltip": "אני מסכים",
    "commentButtonLabel": "",
    "commentButtonTooltip": "השאר תגובה",
    "galleryButtonLabel": "",
    "galleryButtonTooltip": "ראה מסמכים מצורפים",
    "mapButtonLabel": "הצג במפה",
    "mapButtonTooltip": "הצג את מיקום התוספת",
    "commentsListHeading": "הערות",
    "unableToUpdateVoteField": "לא ניתן לקחת בחשבון את ההצבעה שלך כעת.",
    "gotoIssueListTooltip": "הצג את רשימת התוספות",
    "deleteMessage": "האם אתה בטוח שברצונך למחוק?"
  },
  "itemList": {
    "likesForThisItemTooltip": "מספר ההצבעות",
    "loadMoreButtonText": "טען עוד..."
  },
  "comment": {
    "commentsFormHeading": "הערה",
    "commentsFormSubmitButton": "שלח תגובה",
    "commentsFormEditButton": "הערת עדכון",
    "commentsFormCancelButton": "בטל",
    "errorInSubmittingComment": "לא ניתן לשלוח תגובה.",
    "commentSubmittedMessage": "תודה על המשוב.",
    "emptyCommentMessage": "שלח תגובה.",
    "placeHolderText": "הקלד תגובה",
    "noCommentsAvailableText": "אין תגובות זמינות",
    "remainingTextCount": "נותרו ${0} תווים",
    "showNoText": "לא",
    "selectAttachments": "קבצים מצורפים",
    "selectFileText": "נתב",
    "attachmentSelectedMsg": "קבצים מצורפים נבחרו",
    "attachmentHeaderText": "קבצים מצורפים",
    "unknownCommentAttachment": "קובץ",
    "editRecordText": "ערוך",
    "deleteRecordText": "מחיקה",
    "deleteCommentFailedMessage": "אין אפשרות למחוק הערה"
  },
  "gallery": {
    "galleryHeaderText": "גלריה",
    "noAttachmentsAvailableText": "לא נמצאו קבצים מקושרים"
  },
  "dialog": {
    "okButton": "אישור",
    "cancelButton": "בטל",
    "yesButton": "כן",
    "noButton": "לא"
  }
});