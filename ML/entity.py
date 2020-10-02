import os
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

def getEntities(text):
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "IvyHacks-c62f225cec2d.json"
    client = language.LanguageServiceClient()
    document = types.Document(content=text, type=enums.Document.Type.PLAIN_TEXT)
    entities = client.analyze_entities(document=document, encoding_type='UTF32')

    return entities.entities