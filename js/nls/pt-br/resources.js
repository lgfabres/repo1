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
    "error": "Não foi possível criar o mapa",
    "licenseError": {
      "message": "Sua conta não está licenciada para utilizar Aplicativos Configuráveis que não sejam públicos. Solicite ao administrador da sua organização que lhe atribua um tipo de usuário que inclua os Aplicativos Fundamentais ou uma licença complementar dos Aplicativos Fundaentais.",
      "title": "Não Licenciado"
    },
    "warningMessageTitle": "Suporte de navegador limitado",
    "warningMessageAGOL": "Você está utilizando um navegador que está descontinuado. Algumas partes deste aplicativo podem não funcionar de maneira ideal ou totalmente neste navegador. O suporte para este navegador será descontinuado no futuro.</br></br>Utilize as versões mais recentes do <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link>, ou <edge-link>Microsoft Edge</edge-link>.</br></br>Para obter mais informações sobre o suporte do navegador, consulte nossa documentação. Forneça seu comentário pela <feedback-link>GeoNet, a Comunidade da Esri </feedback-link>.",
    "warningMessageEnterprise": "Você está usando um navegador que não é mais suportado. Algumas partes deste aplicativo podem não funcionar de maneira ideal ou de forma alguma neste navegador.</br></br>Utilize as versões mais recentes do <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link>, ou <edge-link>Microsoft Edge</edge-link>.",
    "zoomInTooltip": "Mais Zoom",
    "zoomOutTooltip": "Menos Zoom",
    "geolocationTooltip": "Local Atual"
  },
  "main": {
    "noGroup": "Nenhum grupo configurado",
    "submitReportButtonText": "Enviar um Relatório",
    "gotoListViewTooltip": "Visualização da lista",
    "noFeatureGeomtery": "A feição não pode ser exibida",
    "featureOutsideAOIMessage": "A feição não pode ser adicionada fora da área de estudo",
    "noEditingPermissionsMessage": "Você não tem permissão para executar esta ação.",
    "basemapGalleryText": "Galeria de Mapa Base",
    "basemapThumbnailAltText": "Clique para carregar ${basemapTitle} ${index} de ${totalBasemaps}",
    "legendText": "Legenda",
    "featureNotFoundMessage": "Feição solicitada não encontrada",
    "backButton": "voltar",
    "panelCloseButton": "Fechar"
  },
  "signin": {
    "guestSigninText": "Prosseguir como Convidado",
    "signInOrText": "Ou",
    "signinOptionsText": "Entrar com:",
    "noGroupNameText": "Entrar",
    "guestLoginTooltip": "Entrar como um convidado",
    "facebookLoginTooltip": "Entrar com Facebook",
    "twitterLoginTooltip": "Entrar com Twitter",
    "googlePlusLoginTooltip": "Entrar com Google+",
    "agolLoginTooltip": "Entrar com ArcGIS"
  },
  "webMapList": {
    "owner": "Proprietário",
    "created": "Data de criação",
    "modified": "Data modificada",
    "description": "Descrição",
    "snippet": "Resumo",
    "licenseInfo": "Restrições de uso e acesso",
    "accessInformation": "Créditos",
    "tags": "Tags",
    "numViews": "Número de visualizações",
    "avgRating": "Classificação",
    "noWebMapInGroup": "O grupo configurado é inválido ou nenhum item ainda foi compartilhado com este grupo.",
    "infoBtnToolTip": "Informações do Mapa"
  },
  "issueWall": {
    "noResultsFound": "Nenhuma feição localizada",
    "noResultsFoundInCurrentBuffer": "Nenhuma feição localizada próximo de você",
    "unableToFetchFeatureError": "Não foi possível completar a operação",
    "gotoWebmapListTooltip": "Ir para lista principal",
    "gotoMapViewTooltip": "Visualização do mapa"
  },
  "appHeader": {
    "help": "Ajuda",
    "myReport": "Minhas inscrições",
    "signIn": "Acessar",
    "signOut": "Sair",
    "signInTooltip": "Registrar",
    "signOutTooltip": "Sair",
    "myReportTooltip": "Visualizar minhas inscrições",
    "share": "Compartilhar",
    "shareDialogTitle": "Compartilhar Diálogo",
    "shareDialogAppURLLabel": "URL do Aplicativo",
    "mobileHamburger": "Hamburger"
  },
  "geoform": {
    "enterInformation": "Detalhes",
    "selectAttachments": "Anexos",
    "selectFileText": "Procurar",
    "enterLocation": "Localização",
    "reportItButton": "Reportar Isto",
    "editReportButton": "Atualizar",
    "cancelButton": "Cancelar",
    "requiredField": "(exigido)",
    "selectDefaultText": "Selecionar&hellip;",
    "invalidInputValue": "Insira um valor válido.",
    "noFieldsConfiguredMessage": "Os campos da camada não configurados para capturar dados",
    "invalidSmallNumber": "Digite um número inteiro",
    "invalidNumber": "Digite um número inteiro",
    "invalidFloat": "Digite um número",
    "invalidDouble": "Digite um número",
    "requiredFields": "Forneça valores para todos os campos exigidos",
    "selectLocation": "Selecione o local para seu relatório",
    "numericRangeHintMessage": "${openStrong}Dica:${closeStrong} valor Mínimo ${minValue} e valor Máximo ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Dica:${closeStrong} Data Mínima ${minValue} e Data Máxima ${maxValue}",
    "errorsInApplyEdits": "Não foi possível enviar os valores.",
    "attachmentSelectedMsg": "anexos selecionados",
    "attachmentUploadStatus": "Falha ao carregar ${failed} de ${total} anexos",
    "geoLocationError": "O local atual não está disponível",
    "geoLocationOutOfExtent": "O local atual está fora da extensão do mapa base",
    "submitButtonTooltip": "Enviar",
    "cancelButtonTooltip": "Cancelar",
    "geoformBackButtonTooltip": "Retornar à lista.",
    "locationSelectionHintForPointLayer": "Toque no mapa para desenhar a localização.",
    "locationSelectionHintForPolygonLayer": "Toque no mapa para desenhar a localização. Toque duas vezes para completar o desenho.",
    "locationSelectionHintForPointLayerDesktop": "Clique no mapa para desenhar a localização.",
    "locationSelectionHintForPolygonLayerDesktop": "Clique no mapa para desenhar a localização. Clique duas vezes para completar o desenho.",
    "locationDialogTitle": "Selecione o local para o relatório",
    "locationDialogContent": "Tem certeza que deseja utilizar a localização da imagem?",
    "errorMessageText": "${message} para campo ${fieldName}",
    "deleteAttachmentBtnText": "Excluir anexo"
  },
  "locator": {
    "addressText": "Endereço:",
    "usngText": "USNG",
    "mgrsText": "MGRS",
    "latLongText": "Latitude/Longitude",
    "invalidSearch": "Nenhum resultado encontrado",
    "locatorPlaceholder": "Digite um endereço para pesquisar",
    "locationOutOfExtent": "Localização fora da área de inscrição",
    "searchButtonTooltip": "Pesquisar",
    "clearButtonTooltip": "Limpar valor de pesquisa"
  },
  "myIssues": {
    "title": "Minhas inscrições",
    "myIssuesTooltip": "Minhas inscrições",
    "noResultsFound": "Nenhuma inscrição encontrada"
  },
  "itemDetails": {
    "likeButtonLabel": "",
    "likeButtonTooltip": "Eu concordo",
    "commentButtonLabel": "",
    "commentButtonTooltip": "Deixe um comentário",
    "galleryButtonLabel": "",
    "galleryButtonTooltip": "Visualize documentos anexados",
    "mapButtonLabel": "Visualizar no Mapa",
    "mapButtonTooltip": "Visualizar o local desta inscrição",
    "commentsListHeading": "Comentários",
    "unableToUpdateVoteField": "Seu voto não pode ser contado neste momento.",
    "gotoIssueListTooltip": "Visualizar a lista de inscrições",
    "deleteMessage": "Tem certeza que deseja excluir?"
  },
  "itemList": {
    "likesForThisItemTooltip": "Número de votos",
    "loadMoreButtonText": "Carregar Mais..."
  },
  "comment": {
    "commentsFormHeading": "Comentário",
    "commentsFormSubmitButton": "Enviar Comentário",
    "commentsFormEditButton": "Atualizar Comentário",
    "commentsFormCancelButton": "Cancelar",
    "errorInSubmittingComment": "Não foi possível enviar o comentário.",
    "commentSubmittedMessage": "Obrigado pelo seu comentário.",
    "emptyCommentMessage": "Por favor, insira um comentário.",
    "placeHolderText": "Digite um comentário",
    "noCommentsAvailableText": "Nenhum comentário disponível",
    "remainingTextCount": "${0} caracteres restantes",
    "showNoText": "Não",
    "selectAttachments": "Anexos",
    "selectFileText": "Procurar",
    "attachmentSelectedMsg": "anexos selecionados",
    "attachmentHeaderText": "Anexos",
    "unknownCommentAttachment": "ARQUIVO",
    "editRecordText": "Editar",
    "deleteRecordText": "Excluir",
    "deleteCommentFailedMessage": "Não foi possível excluir o comentário"
  },
  "gallery": {
    "galleryHeaderText": "Galeria",
    "noAttachmentsAvailableText": "Nenhum anexo encontrado"
  },
  "dialog": {
    "okButton": "OK",
    "cancelButton": "Cancelar",
    "yesButton": "Sim",
    "noButton": "Não"
  }
});