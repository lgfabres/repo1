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
    "error": "맵을 생성할 수 없음",
    "licenseError": {
      "message": "귀하의 계정에는 공개 상태가 아닌 구성 설정 앱을 사용할 수 있는 라이선스가 없습니다. 필수 앱 또는 애드온 필수 앱 라이선스가 포함된 사용자 유형을 업무 지시하려면 기관 관리자에게 문의하세요.",
      "title": "라이선스가 없음"
    },
    "warningMessageTitle": "제한된 브라우저 지원",
    "warningMessageAGOL": "사용 중인 브라우저는 더 이상 지원되지 않습니다. 이 브라우저에서는 이 응용프로그램의 일부가 최적으로 작동하지 않거나 전혀 작동하지 않을 수 있습니다. 향후에 이 브라우저에 대한 지원이 중단됩니다.</br></br>최신 버전의 <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link>, <edge-link>Microsoft Edge</edge-link>를 사용하세요.</br></br>브라우저 지원에 대한 자세한 내용은 문서를 참조하세요. <feedback-link>GeoNet(Esri 커뮤니티)</feedback-link>을 통해 피드백을 제공하세요.",
    "warningMessageEnterprise": "사용 중인 브라우저는 더 이상 지원되지 않습니다. 이 브라우저에서는 이 응용프로그램의 일부가 최적으로 작동하지 않거나 전혀 작동하지 않을 수 있습니다.</br></br>최신 버전의 <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link>, <edge-link>Microsoft Edge</edge-link>를 사용하세요.",
    "zoomInTooltip": "확대",
    "zoomOutTooltip": "축소",
    "geolocationTooltip": "현재 위치"
  },
  "main": {
    "noGroup": "구성된 그룹 없음",
    "submitReportButtonText": "보고서 제출",
    "gotoListViewTooltip": "목록 보기",
    "noFeatureGeomtery": "피처를 표시할 수 없음",
    "featureOutsideAOIMessage": "피처를 처리 범위 외부로 추가할 수 없음",
    "noEditingPermissionsMessage": "이 작업을 수행할 권한이 없습니다.",
    "basemapGalleryText": "베이스맵 갤러리",
    "basemapThumbnailAltText": "${totalBasemaps} 중 ${basemapTitle}${index}을(를) 불러오려면 클릭",
    "legendText": "범례",
    "featureNotFoundMessage": "요청한 피처가 없음",
    "backButton": "뒤로",
    "panelCloseButton": "닫기"
  },
  "signin": {
    "guestSigninText": "게스트로 진행",
    "signInOrText": "또는",
    "signinOptionsText": "다음으로 로그인:",
    "noGroupNameText": "로그인하세요.",
    "guestLoginTooltip": "게스트로 로그인",
    "facebookLoginTooltip": "Facebook으로 로그인",
    "twitterLoginTooltip": "Twitter로 로그인",
    "googlePlusLoginTooltip": "Google+로 로그인",
    "agolLoginTooltip": "ArcGIS로 로그인"
  },
  "webMapList": {
    "owner": "소유자",
    "created": "생성일",
    "modified": "수정된 날짜",
    "description": "설명",
    "snippet": "요약",
    "licenseInfo": "접근 및 사용 제약 조건",
    "accessInformation": "크레딧",
    "tags": "태그",
    "numViews": "조회수",
    "avgRating": "평점",
    "noWebMapInGroup": "구성된 그룹이 유효하지 않거나 이 그룹과 공유된 항목이 아직 없습니다.",
    "infoBtnToolTip": "맵 정보"
  },
  "issueWall": {
    "noResultsFound": "피처를 찾을 수 없음",
    "noResultsFoundInCurrentBuffer": "근처에서 피처를 찾을 수 없음",
    "unableToFetchFeatureError": "작업을 완료할 수 없음",
    "gotoWebmapListTooltip": "기본 목록으로 이동",
    "gotoMapViewTooltip": "맵 보기"
  },
  "appHeader": {
    "help": "도움말",
    "myReport": "내 제출",
    "signIn": "로그인",
    "signOut": "로그아웃",
    "signInTooltip": "로그인",
    "signOutTooltip": "로그아웃",
    "myReportTooltip": "내 제출 보기",
    "share": "공유하기",
    "shareDialogTitle": "공유 대화 상자",
    "shareDialogAppURLLabel": "응용프로그램 URL",
    "mobileHamburger": "햄버거 버튼"
  },
  "geoform": {
    "enterInformation": "세부정보",
    "selectAttachments": "첨부 파일",
    "selectFileText": "찾아보기",
    "enterLocation": "위치",
    "reportItButton": "보고",
    "editReportButton": "업데이트",
    "cancelButton": "취소",
    "requiredField": "(필수)",
    "selectDefaultText": "선택&hellip;",
    "invalidInputValue": "유효한 값을 입력하세요.",
    "noFieldsConfiguredMessage": "데이터를 캡처하도록 레이어 필드가 구성되지 않음",
    "invalidSmallNumber": "정수를 입력하세요.",
    "invalidNumber": "정수를 입력하세요.",
    "invalidFloat": "숫자를 입력하세요.",
    "invalidDouble": "숫자를 입력하세요.",
    "requiredFields": "모든 필수 필드에 값을 제공하세요.",
    "selectLocation": "보고서의 위치를 선택하세요.",
    "numericRangeHintMessage": "${openStrong}힌트:${closeStrong} 최소값 ${minValue} 및 최대값 ${maxValue}",
    "dateRangeHintMessage": "${openStrong}힌트:${closeStrong} 최소 날짜 ${minValue} 및 최대 날짜 ${maxValue}",
    "errorsInApplyEdits": "값을 제출할 수 없습니다.",
    "attachmentSelectedMsg": "첨부 파일이 선택됨",
    "attachmentUploadStatus": "${total}개 중 ${failed}개 첨부 파일 업로드 실패",
    "geoLocationError": "현재 위치를 사용할 수 없음",
    "geoLocationOutOfExtent": "현재 위치가 베이스맵 범위를 벗어남",
    "submitButtonTooltip": "제출",
    "cancelButtonTooltip": "취소",
    "geoformBackButtonTooltip": "목록으로 돌아가기",
    "locationSelectionHintForPointLayer": "맵을 눌러 위치를 그립니다.",
    "locationSelectionHintForPolygonLayer": "맵을 눌러 위치를 그립니다. 그리기를 완료하려면 두 번 누르세요.",
    "locationSelectionHintForPointLayerDesktop": "맵을 클릭하여 위치를 그립니다.",
    "locationSelectionHintForPolygonLayerDesktop": "맵을 클릭하여 위치를 그립니다. 그리기를 완료하려면 더블 클릭하세요.",
    "locationDialogTitle": "보고서의 위치 선택",
    "locationDialogContent": "이미지 위치를 사용하시겠습니까?",
    "errorMessageText": "${fieldName} 필드에 대한 ${message}",
    "deleteAttachmentBtnText": "첨부 파일 삭제"
  },
  "locator": {
    "addressText": "주소:",
    "usngText": "USNG",
    "mgrsText": "MGRS",
    "latLongText": "위도/경도",
    "invalidSearch": "결과를 찾을 수 없음",
    "locatorPlaceholder": "검색할 주소 입력",
    "locationOutOfExtent": "위치가 제출 영역 밖에 있음",
    "searchButtonTooltip": "검색",
    "clearButtonTooltip": "검색 값 지우기"
  },
  "myIssues": {
    "title": "내 제출",
    "myIssuesTooltip": "내 제출",
    "noResultsFound": "제출을 찾을 수 없음"
  },
  "itemDetails": {
    "likeButtonLabel": "",
    "likeButtonTooltip": "동의함",
    "commentButtonLabel": "",
    "commentButtonTooltip": "회신 남기기",
    "galleryButtonLabel": "",
    "galleryButtonTooltip": "첨부된 문서 보기",
    "mapButtonLabel": "맵에서 보기",
    "mapButtonTooltip": "이 제출의 위치 보기",
    "commentsListHeading": "의견",
    "unableToUpdateVoteField": "지금은 투표를 계산할 수 없습니다.",
    "gotoIssueListTooltip": "제출 목록 보기",
    "deleteMessage": "삭제하시겠습니까?"
  },
  "itemList": {
    "likesForThisItemTooltip": "투표 수",
    "loadMoreButtonText": "추가로 불러오기..."
  },
  "comment": {
    "commentsFormHeading": "의견",
    "commentsFormSubmitButton": "의견 제출",
    "commentsFormEditButton": "의견 업데이트",
    "commentsFormCancelButton": "취소",
    "errorInSubmittingComment": "의견을 제출할 수 없습니다.",
    "commentSubmittedMessage": "의견을 제공해 주셔서 감사합니다.",
    "emptyCommentMessage": "의견을 입력하세요.",
    "placeHolderText": "의견 입력",
    "noCommentsAvailableText": "의견을 사용할 수 없음",
    "remainingTextCount": "${0}자 남음",
    "showNoText": "아니요",
    "selectAttachments": "첨부 파일",
    "selectFileText": "찾아보기",
    "attachmentSelectedMsg": "첨부 파일이 선택됨",
    "attachmentHeaderText": "첨부 파일",
    "unknownCommentAttachment": "파일",
    "editRecordText": "편집",
    "deleteRecordText": "삭제",
    "deleteCommentFailedMessage": "의견을 삭제할 수 없음"
  },
  "gallery": {
    "galleryHeaderText": "갤러리",
    "noAttachmentsAvailableText": "첨부 파일을 찾을 수 없음"
  },
  "dialog": {
    "okButton": "확인",
    "cancelButton": "취소",
    "yesButton": "예",
    "noButton": "아니오"
  }
});