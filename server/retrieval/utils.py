try:
    from .libs import *
except:
    from libs import *

def image_path_maker(root):
    ext = ['.jpg', '.png']
    path = []
    for f in os.listdir(root):
        dir = os.path.join(root, f)
        img_file = [os.path.join(dir, i) for i in os.listdir(dir) if any(j in i for j in ext)]
        path.extend(img_file)
    return path

def get_model_instance():
    model = models.resnet50(weights='IMAGENET1K_V1')
    # model.classifier = nn.Sequential(*list(model.classifier.children())[:-3])
    return model