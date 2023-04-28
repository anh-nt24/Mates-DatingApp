try:
    from .libs import *
except:
    from libs import *

class ImageTransformation:
    def __init__(self, size):
        self.mean = [0.485, 0.456, 0.406]
        self.std = [0.229, 0.224, 0.225]
        self.data_transform = transforms.Compose([
                transforms.Resize(size=size),
                transforms.ToTensor(),
            ])
    def __call__(self, img):
        return self.data_transform(img)