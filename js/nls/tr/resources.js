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
    "error": "Harita oluşturulamıyor",
    "licenseError": {
      "message": "Hesabınız herkese açık olmayan Yapılandırılabilir Uygulamaları kullanmak için lisanslandırılmamış. Lütfen kuruluş yöneticinizden Temel Uygulamalar veya eklenti Temel Uygulamalar lisansı içeren bir kullanıcı türü atamasını isteyin.",
      "title": "Lisanslı Değil"
    },
    "warningMessageTitle": "Sınırlı tarayıcı desteği",
    "warningMessageAGOL": "Artık kullanımdan kaldırılmış bir tarayıcı kullanıyorsunuz. Bu uygulamanın bazı bölümleri bu tarayıcıda en iyi şekilde veya hiç çalışmayabilir. Bu tarayıcı için destek yakın gelecekte sonlandırılacaktır.</br></br>Lütfen <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> veya <edge-link>Microsoft Edge</edge-link>'in en son versiyonlarını kullanın.</br></br>Tarayıcı desteği hakkında daha fazla bilgi için belgelerimize bakın. Geri bildirimlerinizi <feedback-link>Esri Topluluğu GeoNet</feedback-link> üzerinden iletin.",
    "warningMessageEnterprise": "Artık desteklenmeyen bir tarayıcı kullanıyorsunuz. Bu uygulamanın bazı bölümleri bu tarayıcıda en iyi şekilde veya hiç çalışmayabilir.</br></br>Lütfen <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> veya <edge-link>Microsoft Edge</edge-link>'in en son versiyonlarını kullanın.",
    "zoomInTooltip": "Büyüt",
    "zoomOutTooltip": "Küçült",
    "geolocationTooltip": "Geçerli konum"
  },
  "main": {
    "noGroup": "Yapılandırılan grup yok",
    "submitReportButtonText": "Rapor Gönder",
    "gotoListViewTooltip": "Liste görünümü",
    "noFeatureGeomtery": "Detay görüntülenemiyor",
    "featureOutsideAOIMessage": "Detay araştırma alanı dışına eklenemez",
    "noEditingPermissionsMessage": "Bu işlemi yapma izniniz yok.",
    "basemapGalleryText": "Altlık Harita Galerisi",
    "basemapThumbnailAltText": "${totalBasemaps} ${basemapTitle} ${index} yüklemek için tıklayın",
    "legendText": "Gösterim",
    "featureNotFoundMessage": "İstenen detay bulunamadı",
    "backButton": "geri",
    "panelCloseButton": "Kapat"
  },
  "signin": {
    "guestSigninText": "Konuk olarak devam et",
    "signInOrText": "Veya",
    "signinOptionsText": "Şununla oturum aç:",
    "noGroupNameText": "Oturum açın",
    "guestLoginTooltip": "Konuk olarak oturum aç",
    "facebookLoginTooltip": "Facebook ile oturum aç",
    "twitterLoginTooltip": "Twitter ile oturum aç",
    "googlePlusLoginTooltip": "Google+ ile oturum aç",
    "agolLoginTooltip": "ArcGIS ile oturum aç"
  },
  "webMapList": {
    "owner": "Sahibi",
    "created": "Oluşturulma tarihi",
    "modified": "Değiştirme tarihi:",
    "description": "Tanım",
    "snippet": "Özet",
    "licenseInfo": "Kısıtlamalara eriş ve bunları kullan",
    "accessInformation": "Katkı Yapanlar",
    "tags": "Etiketler",
    "numViews": "Görüntülenme sayısı",
    "avgRating": "Derecelendirme",
    "noWebMapInGroup": "Yapılandırılmış grup geçersiz veya bu grupla henüz öğe paylaşılmamış.",
    "infoBtnToolTip": "Harita bilgileri"
  },
  "issueWall": {
    "noResultsFound": "Detay bulunamadı",
    "noResultsFoundInCurrentBuffer": "Yakınınızda detay bulunamadı",
    "unableToFetchFeatureError": "işlem tamamlanamıyor",
    "gotoWebmapListTooltip": "Ana listeye git",
    "gotoMapViewTooltip": "Harita görünümü"
  },
  "appHeader": {
    "help": "Yardım",
    "myReport": "Gönderilerim",
    "signIn": "Oturum Açma",
    "signOut": "Oturum Kapat",
    "signInTooltip": "Hesabınıza",
    "signOutTooltip": "Oturumu kapat",
    "myReportTooltip": "Gönderilerimi görüntüle",
    "share": "Paylaş",
    "shareDialogTitle": "İletişimi Paylaş",
    "shareDialogAppURLLabel": "Uygulama URL’si",
    "mobileHamburger": "Hamburg"
  },
  "geoform": {
    "enterInformation": "Ayrıntılar",
    "selectAttachments": "Eklentiler",
    "selectFileText": "...",
    "enterLocation": "Konum",
    "reportItButton": "Bildir",
    "editReportButton": "Güncelle",
    "cancelButton": "İptal",
    "requiredField": "(gerekli)",
    "selectDefaultText": "Seç&hellip;",
    "invalidInputValue": "Geçerli değer girin.",
    "noFieldsConfiguredMessage": "Katman alanları veri yakalamak üzere yapılandırılmamış",
    "invalidSmallNumber": "Tamsayı girin",
    "invalidNumber": "Tamsayı girin",
    "invalidFloat": "Lütfen bir sayı girin",
    "invalidDouble": "Lütfen bir sayı girin",
    "requiredFields": "Tüm gerekli alanlar için değer girin",
    "selectLocation": "Raporunuzun konumunu seçin",
    "numericRangeHintMessage": "${openStrong}İpucu:${closeStrong} Minimum değer ${minValue} ve Maksimum değer ${maxValue}",
    "dateRangeHintMessage": "${openStrong}İpucu:${closeStrong} Minimum Tarih ${minValue} ve Maksimum Tarih ${maxValue}",
    "errorsInApplyEdits": "Değerler gönderilemedi.",
    "attachmentSelectedMsg": "ek seçildi",
    "attachmentUploadStatus": "${failed} / ${total} ek yüklenemedi",
    "geoLocationError": "Geçerli konum kullanılamıyor",
    "geoLocationOutOfExtent": "Geçerli konum altlık haritası yayılımı dışında",
    "submitButtonTooltip": "Gönder",
    "cancelButtonTooltip": "İptal",
    "geoformBackButtonTooltip": "Listeye dön",
    "locationSelectionHintForPointLayer": "Konumu çizmek için haritaya dokunun.",
    "locationSelectionHintForPolygonLayer": "Konumu çizmek için haritaya dokunun. Çizimi tamamlamak için çift dokunun.",
    "locationSelectionHintForPointLayerDesktop": "Konumu çizmek için haritaya tıklayın.",
    "locationSelectionHintForPolygonLayerDesktop": "Konumu çizmek için haritaya tıklayın. Çizimi tamamlamak için çift tıklayın.",
    "locationDialogTitle": "Rapor için bir konum seçin",
    "locationDialogContent": "Görüntü konumunu kullanmak istediğinize emin misiniz?",
    "errorMessageText": "${fieldName} alanı için ${message}",
    "deleteAttachmentBtnText": "Eklentiyi sil"
  },
  "locator": {
    "addressText": "Adres:",
    "usngText": "USNG",
    "mgrsText": "MGRS",
    "latLongText": "Enlem/Boylam",
    "invalidSearch": "Sonuç bulunamadı",
    "locatorPlaceholder": "Aranacak adres gir",
    "locationOutOfExtent": "Konum gönderim bölgesinin dışında",
    "searchButtonTooltip": "Ara",
    "clearButtonTooltip": "Arama değerini temizle"
  },
  "myIssues": {
    "title": "Gönderilerim",
    "myIssuesTooltip": "Gönderilerim",
    "noResultsFound": "Gönderim bulunamadı"
  },
  "itemDetails": {
    "likeButtonLabel": "",
    "likeButtonTooltip": "Onaylıyorum",
    "commentButtonLabel": "",
    "commentButtonTooltip": "Yanıt bırakın",
    "galleryButtonLabel": "",
    "galleryButtonTooltip": "Ekli belgeleri incele",
    "mapButtonLabel": "Haritada görüntüle",
    "mapButtonTooltip": "Bu gönderimin konumunu görüntüle",
    "commentsListHeading": "Yorumlar",
    "unableToUpdateVoteField": "Oyunuz şu anda sayılamıyor.",
    "gotoIssueListTooltip": "Gönderim listesini görüntüle",
    "deleteMessage": "Silmek istediğinizden emin misiniz?"
  },
  "itemList": {
    "likesForThisItemTooltip": "Oy sayısı",
    "loadMoreButtonText": "Daha Fazla Yükle..."
  },
  "comment": {
    "commentsFormHeading": "Yorum",
    "commentsFormSubmitButton": "Yorum Gönder",
    "commentsFormEditButton": "Yorumu Güncelle",
    "commentsFormCancelButton": "İptal",
    "errorInSubmittingComment": "Yorum gönderilemedi.",
    "commentSubmittedMessage": "Geri bildiriminiz için teşekkür ederiz.",
    "emptyCommentMessage": "Lütfen bir yorum girin.",
    "placeHolderText": "Yorum yaz",
    "noCommentsAvailableText": "Kullanılabilir yorum yok",
    "remainingTextCount": "${0} karakter kaldı",
    "showNoText": "Hayır",
    "selectAttachments": "Ekler",
    "selectFileText": "...",
    "attachmentSelectedMsg": "ek seçildi",
    "attachmentHeaderText": "Ekler",
    "unknownCommentAttachment": "DOSYA",
    "editRecordText": "Düzenle",
    "deleteRecordText": "Sil",
    "deleteCommentFailedMessage": "Yorum silinemedi"
  },
  "gallery": {
    "galleryHeaderText": "Galeri",
    "noAttachmentsAvailableText": "Herhangi bir eklenti bulunamadı"
  },
  "dialog": {
    "okButton": "Tamam",
    "cancelButton": "İptal Et",
    "yesButton": "Evet",
    "noButton": "Hayır"
  }
});