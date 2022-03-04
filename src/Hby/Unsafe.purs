module Hby.Unsafe where

import Prelude
import Hby.Task (Task)
import Unsafe.Coerce (unsafeCoerce)

foreign import unsafeSet :: forall r a. String -> a -> Record r -> Task Unit

foreign import unsafeLog :: forall a. a -> Task Unit

unsafeBindThis :: forall f a. f -> a -> f
unsafeBindThis f a = (unsafeCoerce f).bind a
