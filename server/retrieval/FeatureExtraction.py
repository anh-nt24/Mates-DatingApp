try:
    from .libs import *
except:
    from libs import *

class FeatureExtraction():
    def __init__(self, model, transformer):
        self.model = model.eval().to(device)
        self.transformer = transformer

    def __call__(self, path):
        img = Image.open(path).convert('RGB')
        img_tf = self.transformer(img)
        img_tf = img_tf[None]
        feature = self.model(img_tf)[0]
        feature = feature.to('cpu').detach().numpy()
        vector = feature/np.linalg.norm(feature)
        return vector