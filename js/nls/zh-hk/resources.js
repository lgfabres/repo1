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
    "error": "無法建立地圖",
    "licenseError": {
      "message": "您的帳號未經授權，無法使用非公開的可配置應用程式。 請聯繫您的組織管理員，請其將包含基礎應用程式或附加元件基礎應用程式授權的使用者類型指派給您。",
      "title": "未經許可"
    },
    "warningMessageTitle": "有限的瀏覽器支援",
    "warningMessageAGOL": "您正在使用已淘汰的瀏覽器。 此應用程式的部分組件可能無法在此瀏覽器中正常運作或完全無法運作。 未來將中斷支援此瀏覽器。</br></br>請使用最新版的 <chrome-link>Google Chrome</chrome-link>、<firefox-link>Mozilla Firefox</firefox-link>、<safari-link>Apple Safari</safari-link> 或 <edge-link>Microsoft Edge</edge-link>。</br></br>有關瀏覽器支援的詳細資訊，請參閱我們的文件。 請透過 <feedback-link>Esri 社群 (即 GeoNet)</feedback-link> 提供您的回饋意見。",
    "warningMessageEnterprise": "您正在使用不再支援的瀏覽器。 此應用程式的某些部分可能無法在此瀏覽器中以最佳狀態執行，或完全無法執行。</br></br>請使用最新版的 <chrome-link>Google Chrome</chrome-link>、<firefox-link>Mozilla Firefox</firefox-link>、<safari-link>Apple Safari</safari-link> 或 <edge-link>Microsoft Edge</edge-link>。",
    "zoomInTooltip": "放大",
    "zoomOutTooltip": "縮小",
    "geolocationTooltip": "目前位置"
  },
  "main": {
    "noGroup": "未配置任何群組",
    "submitReportButtonText": "提交報告",
    "gotoListViewTooltip": "清單視圖",
    "noFeatureGeomtery": "無法顯示圖徵",
    "featureOutsideAOIMessage": "無法在研究區域外部新增圖徵",
    "noEditingPermissionsMessage": "您沒有執行此動作的權限。",
    "basemapGalleryText": "底圖庫",
    "basemapThumbnailAltText": "按一下以載入 ${basemapTitle} ${index} 個，總計 ${totalBasemaps} 個",
    "legendText": "圖例",
    "featureNotFoundMessage": "找不到請求的功能",
    "backButton": "後退",
    "panelCloseButton": "關閉"
  },
  "signin": {
    "guestSigninText": "以訪客身份繼續進行",
    "signInOrText": "Or(R)",
    "signinOptionsText": "透過以下方式登入：",
    "noGroupNameText": "請登入",
    "guestLoginTooltip": "以訪客身份登入",
    "facebookLoginTooltip": "使用 Facebook 登入",
    "twitterLoginTooltip": "使用 Twitter 登入",
    "googlePlusLoginTooltip": "使用 Google+ 登入",
    "agolLoginTooltip": "使用 ArcGIS 登入"
  },
  "webMapList": {
    "owner": "擁有者",
    "created": "建立日期",
    "modified": "修改日期",
    "description": "描述",
    "snippet": "摘要(S)",
    "licenseInfo": "存取和使用限制",
    "accessInformation": "點數",
    "tags": "標記",
    "numViews": "視圖數量",
    "avgRating": "評級次數",
    "noWebMapInGroup": "已配置的群組無效，或者沒有與該群組共用的任何項目。",
    "infoBtnToolTip": "地圖資訊"
  },
  "issueWall": {
    "noResultsFound": "找不到圖徵",
    "noResultsFoundInCurrentBuffer": "找不到您附近的圖徵",
    "unableToFetchFeatureError": "無法完成操作",
    "gotoWebmapListTooltip": "轉至主清單",
    "gotoMapViewTooltip": "地圖視圖"
  },
  "appHeader": {
    "help": "說明",
    "myReport": "我的提交",
    "signIn": "登入",
    "signOut": "登出",
    "signInTooltip": "登入",
    "signOutTooltip": "登出",
    "myReportTooltip": "檢視我的提交",
    "share": "分享",
    "shareDialogTitle": "分享對話方塊",
    "shareDialogAppURLLabel": "應用程式 URL",
    "mobileHamburger": "漢堡包"
  },
  "geoform": {
    "enterInformation": "詳細資訊",
    "selectAttachments": "附件(A)",
    "selectFileText": "瀏覽(B)",
    "enterLocation": "位置",
    "reportItButton": "進行報告",
    "editReportButton": "更新",
    "cancelButton": "取消",
    "requiredField": "(必填)",
    "selectDefaultText": "選擇&hellip;",
    "invalidInputValue": "請輸入有效值。",
    "noFieldsConfiguredMessage": "圖層欄位未被配置為擷取資料",
    "invalidSmallNumber": "請輸入一個整數",
    "invalidNumber": "請輸入一個整數",
    "invalidFloat": "請輸入一個數字",
    "invalidDouble": "請輸入一個數字",
    "requiredFields": "請為所有必填欄位填寫值",
    "selectLocation": "請為您的報告選擇位置",
    "numericRangeHintMessage": "${openStrong}提示:${closeStrong} 最小值 ${minValue} 和最大值 ${maxValue}",
    "dateRangeHintMessage": "${openStrong}提示:${closeStrong} 最小日期 ${minValue} 和最大日期 ${maxValue}",
    "errorsInApplyEdits": "無法提交值。",
    "attachmentSelectedMsg": "已選定附件",
    "attachmentUploadStatus": "${failed} 個附件（共有 ${total} 個）上傳失敗",
    "geoLocationError": "目前位置不可用",
    "geoLocationOutOfExtent": "目前位置不在底圖範圍之內",
    "submitButtonTooltip": "提交",
    "cancelButtonTooltip": "取消",
    "geoformBackButtonTooltip": "返回清單",
    "locationSelectionHintForPointLayer": "點選地圖以繪製位置。",
    "locationSelectionHintForPolygonLayer": "點選地圖以繪製位置。點選兩次以完成繪製。",
    "locationSelectionHintForPointLayerDesktop": "按一下地圖以繪製位置。",
    "locationSelectionHintForPolygonLayerDesktop": "按一下地圖以繪製位置。按兩下以完成繪製。",
    "locationDialogTitle": "選擇報告的位置",
    "locationDialogContent": "您是否確定要使用圖片位置?",
    "errorMessageText": "欄位 ${fieldName} 的 ${message}",
    "deleteAttachmentBtnText": "刪除附件"
  },
  "locator": {
    "addressText": "地址(E):",
    "usngText": "USNG",
    "mgrsText": "MGRS",
    "latLongText": "緯度/經度",
    "invalidSearch": "未找到任何結果",
    "locatorPlaceholder": "輸入一個搜尋位址",
    "locationOutOfExtent": "位置位於提交區域外部",
    "searchButtonTooltip": "搜尋",
    "clearButtonTooltip": "清除搜尋值"
  },
  "myIssues": {
    "title": "我的提交",
    "myIssuesTooltip": "我的提交",
    "noResultsFound": "找不到提交"
  },
  "itemDetails": {
    "likeButtonLabel": "",
    "likeButtonTooltip": "我同意",
    "commentButtonLabel": "",
    "commentButtonTooltip": "發表回覆",
    "galleryButtonLabel": "",
    "galleryButtonTooltip": "參閱隨附的說明文件",
    "mapButtonLabel": "檢視地圖",
    "mapButtonTooltip": "檢視此提交的位置",
    "commentsListHeading": "評論",
    "unableToUpdateVoteField": "您的投票此時無法進行計數。",
    "gotoIssueListTooltip": "檢視提交的清單",
    "deleteMessage": "是否確定要刪除?"
  },
  "itemList": {
    "likesForThisItemTooltip": "票數",
    "loadMoreButtonText": "載入更多..."
  },
  "comment": {
    "commentsFormHeading": "評論",
    "commentsFormSubmitButton": "提交評論",
    "commentsFormEditButton": "更新評論",
    "commentsFormCancelButton": "取消",
    "errorInSubmittingComment": "無法提交評論。",
    "commentSubmittedMessage": "感謝您的回饋意見!",
    "emptyCommentMessage": "請輸入一條評論。",
    "placeHolderText": "輸入一條評論",
    "noCommentsAvailableText": "沒有任何評論可用",
    "remainingTextCount": "剩餘 ${0} 個字元",
    "showNoText": "否(N)",
    "selectAttachments": "附件",
    "selectFileText": "瀏覽",
    "attachmentSelectedMsg": "已選定附件",
    "attachmentHeaderText": "附件",
    "unknownCommentAttachment": "檔案",
    "editRecordText": "編輯",
    "deleteRecordText": "刪除",
    "deleteCommentFailedMessage": "無法刪除評論"
  },
  "gallery": {
    "galleryHeaderText": "圖庫",
    "noAttachmentsAvailableText": "未找到任何附件"
  },
  "dialog": {
    "okButton": "確定",
    "cancelButton": "取消",
    "yesButton": "是",
    "noButton": "否"
  }
});