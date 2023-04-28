from libs import *
from utils import *

from ImageTransformation import ImageTransformation
from FeatureExtraction import FeatureExtraction

img_dir = '../upload/'
img_list = image_path_maker(img_dir)

model = get_model_instance()
transformer = ImageTransformation((224, 224))
ft_ex = FeatureExtraction(model, transformer)
vectors = []
paths = []

for i in img_list:
    img_vector = ft_ex(i)
    vectors.append(img_vector)
    paths.append(i)

vector_file = '../vectors/vectors.pkl'
path_file = '../vectors/paths.pkl'

# save to database
with open(vector_file, 'wb') as f:
    pickle.dump(vectors, f)
with open(path_file, 'wb') as f:
    pickle.dump(paths, f)